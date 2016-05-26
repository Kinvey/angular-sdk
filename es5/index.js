'use strict';

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

var _rack = require('kinvey-javascript-sdk-core/es5/rack/rack');

var _http = require('kinvey-javascript-sdk-core/es5/rack/middleware/http');

var _http2 = require('./http');

var _device = require('./device');

var _popup = require('./popup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add the Http Middleware to the network rack
var networkRack = _rack.NetworkRack.sharedInstance();
networkRack.swap(_http.HttpMiddleware, new _http2.AngularHttpMiddleware());

// Expose globals
global.KinveyDevice = _device.AngularDevice;
global.KinveyPopup = _popup.AngularPopup;

// Register the SDK as a provider
var ngKinvey = angular.module('kinvey', []);
ngKinvey.provider('$kinvey', _provider2.default);