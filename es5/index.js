'use strict';

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register the SDK as a provider
var ngKinvey = angular.module('kinvey', []);
ngKinvey.provider('$kinvey', _provider2.default);