'use strict';

var _provider = require('./provider');

var _device = require('./device');

var _popup = require('./popup');

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-unresolved

// Create the kinvey angular module
var ngKinvey = _angular2.default.module('kinvey', []);
ngKinvey.provider('$kinvey', _provider.KinveyProvider);

// Expose globals
global.Kinvey = global.Kinvey || {};
global.Kinvey.Device = _device.Device;
global.Kinvey.Popup = _popup.Popup;

// Export
module.exports = ngKinvey;