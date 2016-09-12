'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kinvey = undefined;

var _kinveyPhonegapSdk = require('kinvey-phonegap-sdk');

var _kinveyJavascriptSdkCore = require('kinvey-javascript-sdk-core');

var _rack = require('./rack');

var _device = require('./device');

var _popup = require('./popup');

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-unresolved
var $injector = _angular2.default.injector(['ng']);
var $q = $injector.get('$q');

// Set CacheRequest rack
_kinveyJavascriptSdkCore.CacheRequest.rack = new _rack.CacheRack();

// Set NetworkRequest rack
_kinveyJavascriptSdkCore.NetworkRequest.rack = new _rack.NetworkRack();

// Add Modules
_kinveyPhonegapSdk.Kinvey.Device = _device.Device;
_kinveyPhonegapSdk.Kinvey.HttpMiddleware = _rack.HttpMiddleware;
_kinveyPhonegapSdk.Kinvey.Popup = _popup.Popup;
_kinveyPhonegapSdk.Kinvey.Promise = $q;

// Export
exports.Kinvey = _kinveyPhonegapSdk.Kinvey;