'use strict';

var _provider = require('./provider');

var _errors = require('kinvey-javascript-sdk-core/dist/errors');

var _rack = require('kinvey-javascript-sdk-core/dist/rack/rack');

var _cache = require('kinvey-javascript-sdk-core/dist/rack/cache');

var _cache2 = require('kinvey-phonegap-sdk/dist/cache');

var _http = require('kinvey-javascript-sdk-core/dist/rack/http');

var _http2 = require('./http');

var _device = require('./device');

var _popup = require('./popup');

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-unresolved

// Swap Cache Middelware
var cacheRack = _rack.KinveyRackManager.cacheRack;
cacheRack.swap(_cache.CacheMiddleware, new _cache2.CacheMiddleware());

// Swap Http middleware
var networkRack = _rack.KinveyRackManager.networkRack;
networkRack.swap(_http.HttpMiddleware, new _http2.HttpMiddleware());

// Check that the cordova device plugin is installed
_device.Device.ready().then(function () {
  if (_device.Device.isPhoneGap() && typeof global.device === 'undefined') {
    throw new _errors.KinveyError('Cordova Device Plugin is not installed.' + ' Please refer to devcenter.kinvey.com/phonegap-v3.0/guides/getting-started for help with' + ' setting up your project.');
  }
});

// Expose globals
global.KinveyDevice = _device.Device;
global.KinveyPopup = _popup.Popup;

// Register the SDK as a provider
var ngKinvey = _angular2.default.module('kinvey', []);
ngKinvey.provider('$kinvey', _provider.KinveyProvider);