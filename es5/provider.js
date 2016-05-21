'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kinveyPhonegapSdk = require('kinvey-phonegap-sdk');

var _rack = require('kinvey-javascript-sdk-core/es5/rack/rack');

var _http = require('kinvey-javascript-sdk-core/es5/rack/middleware/http');

var _http2 = require('./http');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Add the Http Middleware to the network rack
var networkRack = _rack.NetworkRack.sharedInstance();
networkRack.swap(_http.HttpMiddleware, new _http2.HttpMiddleware());

// ngKinveyProvider class

var KinveyProvider = function () {
  function KinveyProvider() {
    _classCallCheck(this, KinveyProvider);
  }

  _createClass(KinveyProvider, [{
    key: 'init',
    value: function init(options) {
      return _kinveyPhonegapSdk.Kinvey.init(options);
    }
  }, {
    key: '$get',
    value: function $get() {
      return _kinveyPhonegapSdk.Kinvey;
    }
  }]);

  return KinveyProvider;
}();

exports.default = KinveyProvider;