'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _kinveyJavascriptSdkCore = require('kinvey-javascript-sdk-core');

var _rack = require('kinvey-javascript-sdk-core/es5/rack/rack');

var _http = require('kinvey-javascript-sdk-core/es5/rack/middleware/http');

var _http2 = require('./http');

var _push = require('kinvey-phonegap-sdk/es5/push');

var _device = require('./device');

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Add the Http Middleware to the network rack
var networkRack = _rack.NetworkRack.sharedInstance();
networkRack.swap(_http.KinveyHttpMiddleware, new _http2.HttpMiddleware());

// Extend the Core Kinvey class

var Kinvey = function (_CoreKinvey) {
  _inherits(Kinvey, _CoreKinvey);

  function Kinvey() {
    _classCallCheck(this, Kinvey);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Kinvey).apply(this, arguments));
  }

  _createClass(Kinvey, null, [{
    key: 'init',
    value: function init(options) {
      // Initialize Kinvey
      var client = _get(Object.getPrototypeOf(Kinvey), 'init', this).call(this, options);

      // Add Push module to Kinvey
      if (_device2.default.isiOS() || _device2.default.isAndroid()) {
        this.Push = new _push.Push();
      }

      // Return the client
      return client;
    }
  }]);

  return Kinvey;
}(_kinveyJavascriptSdkCore.Kinvey);

// ngKinveyProvider class


var KinveyProvider = function () {
  function KinveyProvider() {
    _classCallCheck(this, KinveyProvider);
  }

  _createClass(KinveyProvider, [{
    key: 'init',
    value: function init(options) {
      return Kinvey.init(options);
    }
  }, {
    key: '$get',
    value: function $get() {
      return Kinvey;
    }
  }]);

  return KinveyProvider;
}();

exports.default = KinveyProvider;