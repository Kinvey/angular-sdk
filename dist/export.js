'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _export = require('kinvey-phonegap-sdk/dist/export');

Object.keys(_export).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _export[key];
    }
  });
});

var _ngKinvey = require('./ngKinvey');

Object.keys(_ngKinvey).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ngKinvey[key];
    }
  });
});