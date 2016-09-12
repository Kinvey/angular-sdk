'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Device = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kinveyPhonegapSdk = require('kinvey-phonegap-sdk');

var _kinveyHtml5Sdk = require('kinvey-html5-sdk');

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-unresolved


/**
 * @private
 */
var Device = exports.Device = function (_PhoneGapDevice) {
  _inherits(Device, _PhoneGapDevice);

  function Device() {
    _classCallCheck(this, Device);

    return _possibleConstructorReturn(this, (Device.__proto__ || Object.getPrototypeOf(Device)).apply(this, arguments));
  }

  _createClass(Device, null, [{
    key: 'toJSON',
    value: function toJSON() {
      var json = void 0;

      // Get the correct device information
      if (Device.isPhoneGap()) {
        json = _kinveyPhonegapSdk.Device.toJSON();
      } else {
        json = _kinveyHtml5Sdk.Device.toJSON();
      }

      // Add angular information
      if (json.platform) {
        json.platform.name = 'angular';
        json.platform.version = _angular2.default.version.full;
      }

      // Add sdk information
      json.kinveySDK = {
        name: _package2.default.name,
        version: _package2.default.version
      };

      return json;
    }
  }]);

  return Device;
}(_kinveyPhonegapSdk.Device);