'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Push = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _errors = require('kinvey-javascript-sdk-core/build/errors');

var _events = require('events');

var _datastore = require('kinvey-javascript-sdk-core/build/stores/datastore');

var _enums = require('kinvey-javascript-sdk-core/build/enums');

var _user = require('kinvey-javascript-sdk-core/build/user');

var _network = require('kinvey-javascript-sdk-core/build/requests/network');

var _client = require('kinvey-javascript-sdk-core/build/client');

var _query = require('kinvey-javascript-sdk-core/build/query');

var _utils = require('./utils');

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pushNamespace = process.env.KINVEY_PUSH_NAMESPACE || 'push';
var notificationEvent = process.env.KINVEY_NOTIFICATION_EVENT || 'notification';
var deviceCollectionName = process.env.KINVEY_DEVICE_COLLECTION_NAME || 'kinvey_device';
var emitter = new _events.EventEmitter();
var phonegapPush = null;

var Push = exports.Push = function () {
  function Push() {
    _classCallCheck(this, Push);
  }

  _createClass(Push, null, [{
    key: 'listeners',
    value: function listeners() {
      return emitter.listeners(notificationEvent);
    }
  }, {
    key: 'onNotification',
    value: function onNotification(listener) {
      return emitter.on(notificationEvent, listener);
    }
  }, {
    key: 'onceNotification',
    value: function onceNotification(listener) {
      return emitter.once(notificationEvent, listener);
    }
  }, {
    key: 'removeListener',
    value: function removeListener(listener) {
      return emitter.removeListener(notificationEvent, listener);
    }
  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners() {
      return emitter.removeAllListeners(notificationEvent);
    }
  }, {
    key: 'isSupported',
    value: function isSupported() {
      return (0, _utils.isiOS)() || (0, _utils.isAndroid)();
    }
  }, {
    key: 'register',
    value: function register() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      if (!Push.isSupported()) {
        return Promise.reject(new _errors.KinveyError('Kinvey currently only supports ' + 'push notifications on iOS and Android platforms.'));
      }

      options = (0, _assign2.default)({
        android: {
          senderID: undefined
        },
        ios: {
          alert: true,
          badge: true,
          sound: true
        },
        force: false
      }, options);

      var promise = new Promise(function (resolve, reject) {
        if (typeof global.PushNotification === 'undefined') {
          return reject(new _errors.KinveyError('PhoneGap Push Notification Plugin is not installed.', 'Please refer to http://devcenter.kinvey.com/phonegap/guides/push#ProjectSetUp for ' + 'setting up your project.'));
        }

        phonegapPush = global.PushNotification.init(options);

        phonegapPush.on('registration', function (data) {
          resolve(data.registrationId);
        });

        phonegapPush.on('notification', function (data) {
          emitter.emit(notificationEvent, data);
        });

        phonegapPush.on('error', function (error) {
          reject(new _errors.KinveyError('An error occurred registering this device for push notifications.', error));
        });

        return phonegapPush;
      }).then(function (deviceId) {
        if (!deviceId) {
          throw new _errors.KinveyError('Unable to retrieve the device id to register this device for push notifications.');
        }

        var store = _datastore.DataStore.getInstance(deviceCollectionName, _datastore.DataStoreType.Sync);
        store.disableSync();
        return store.findById(deviceId).catch(function (error) {
          if (error instanceof _errors.NotFoundError) {
            return undefined;
          }

          throw error;
        }).then(function (entity) {
          if (entity && options.force !== true) {
            return entity;
          }

          var user = _user.User.getActiveUser();
          var client = _client.Client.sharedInstance();
          var request = new _network.NetworkRequest({
            method: _enums.HttpMethod.POST,
            url: _url2.default.format({
              protocol: client.protocol,
              host: client.host,
              pathname: '/' + pushNamespace + '/' + client.appKey + '/register-device'
            }),
            properties: options.properties,
            authType: user ? _enums.AuthType.Session : _enums.AuthType.Master,
            data: {
              platform: global.device.platform.toLowerCase(),
              framework: 'phonegap',
              deviceId: deviceId,
              userId: user ? undefined : options.userId
            },
            timeout: options.timeout
          });
          return request.execute().then(function () {
            return store.save({ _id: deviceId, registered: true });
          });
        });
      });

      return promise;
    }
  }, {
    key: 'unregister',
    value: function unregister() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      if (!Push.isSupported()) {
        return Promise.reject(new _errors.KinveyError('Kinvey currently only supports ' + 'push notifications on iOS and Android platforms.'));
      }

      var store = _datastore.DataStore.getInstance(deviceCollectionName, _datastore.DataStoreType.Sync);
      store.disableSync();
      var query = new _query.Query();
      query.equalsTo('registered', true);
      var promise = store.find(query).then(function (data) {
        if (data.length === 1) {
          return data[0]._id;
        }

        return undefined;
      }).then(function (deviceId) {
        if (!deviceId) {
          throw new _errors.KinveyError('This device has not been registered.');
        }

        var user = _user.User.getActiveUser();
        var client = _client.Client.sharedInstance();
        var request = new _network.NetworkRequest({
          method: _enums.HttpMethod.POST,
          url: _url2.default.format({
            protocol: client.protocol,
            host: client.host,
            pathname: '/' + pushNamespace + '/' + client.appKey + '/unregister-device'
          }),
          properties: options.properties,
          authType: user ? _enums.AuthType.Session : _enums.AuthType.Master,
          data: {
            platform: global.device.platform.toLowerCase(),
            framework: 'phonegap',
            deviceId: deviceId,
            userId: user ? null : options.userId
          },
          timeout: options.timeout
        });
        return request.execute().then(function (response) {
          return store.removeById(deviceId).then(function () {
            return response.data;
          });
        });
      });

      return promise;
    }
  }]);

  return Push;
}();