'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _provider = require('./provider');

var ngKinvey = angular.module('kinvey', []);
ngKinvey.provider('$kinvey', _provider.KinveyProvider);

var _module = {
  name: 'kinvey'
};
exports.default = _module;