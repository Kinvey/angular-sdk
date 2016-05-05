'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @private
 */

var Device = function () {
  function Device() {
    _classCallCheck(this, Device);
  }

  _createClass(Device, null, [{
    key: 'isBrowser',
    value: function isBrowser() {
      return typeof global.device !== 'undefined' && global.device.platform === 'browser';
    }
  }, {
    key: 'isiOS',
    value: function isiOS() {
      return typeof global.device !== 'undefined' && global.device.platform === 'iOS';
    }
  }, {
    key: 'isAndroid',
    value: function isAndroid() {
      return typeof global.device !== 'undefined' && global.device.platform === 'Android';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      if (Device.isBrowser()) {
        var userAgent = global.navigator.userAgent.toLowerCase();
        var rChrome = /(chrome)\/([\w]+)/;
        var rFirefox = /(firefox)\/([\w.]+)/;
        var rIE = /(msie) ([\w.]+)/i;
        var rOpera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
        var rSafari = /(safari)\/([\w.]+)/;
        var browser = rChrome.exec(userAgent) || rFirefox.exec(userAgent) || rIE.exec(userAgent) || rOpera.exec(userAgent) || rSafari.exec(userAgent) || [];

        return {
          device: {
            model: global.navigator.userAgent
          },
          environment: {},
          library: {
            name: 'angular',
            version: global.angular.version.full
          },
          os: {
            name: browser[1],
            version: browser[2]
          },
          kinveySDK: {
            name: _package2.default.name,
            version: _package2.default.version
          }
        };
      }

      return {
        device: {
          model: global.device.model
        },
        environment: {
          name: 'phonegap',
          version: global.device.cordova
        },
        library: {
          name: 'angular',
          version: global.angular.version.full
        },
        os: {
          name: global.device.platform,
          version: global.device.version
        },
        kinveySDK: {
          name: _package2.default.name,
          version: _package2.default.version
        }
      };
    }
  }]);

  return Device;
}();

exports.default = Device;