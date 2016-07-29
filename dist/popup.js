'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = undefined;

var _popup = require('kinvey-phonegap-sdk/dist/popup');

var _popup2 = require('kinvey-html5-sdk/dist/popup');

var _device = require('./device');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @private
 */

var Popup = exports.Popup = function Popup() {
  _classCallCheck(this, Popup);

  // Create a popup proxy
  if (_device.Device.isPhoneGap()) {
    return new _popup.Popup();
  }

  return new _popup2.Popup();
};