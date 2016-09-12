'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('./src/http');

Object.keys(_http).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _http[key];
    }
  });
});