'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = undefined;

var _kinveyPhonegapSdk = require('kinvey-phonegap-sdk');

var _kinveyHtml5Sdk = require('kinvey-html5-sdk');

var _device = require('./device');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @private
 */
var Popup = exports.Popup = function Popup() {
  _classCallCheck(this, Popup);

  if (_device.Device.isPhoneGap()) {
    return new _kinveyPhonegapSdk.Popup();
  }

  return new _kinveyHtml5Sdk.Popup();
};