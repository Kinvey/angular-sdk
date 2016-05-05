'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _provider = require('./provider');

var ngKinvey = angular.module('kinvey', []);
ngKinvey.provider('$kinvey', _provider.KinveyProvider);

// Create the kinvey module
var _module = {
  name: 'kinvey'
};

// Export
exports.default = _module;