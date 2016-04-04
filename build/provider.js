'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KinveyProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kinveyJavascriptSdkCore = require('kinvey-javascript-sdk-core');

var _rack = require('kinvey-javascript-sdk-core/build/rack/rack');

var _serialize = require('kinvey-javascript-sdk-core/build/rack/middleware/serialize');

var _http = require('./http');

var _popup = require('kinvey-javascript-sdk-core/build/utils/popup');

var _popup2 = require('./popup');

var _device = require('kinvey-javascript-sdk-core/build/utils/device');

var _device2 = require('./device');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KinveyProvider = exports.KinveyProvider = function () {
  function KinveyProvider() {
    _classCallCheck(this, KinveyProvider);

    // Use Http middleware after the Serialize middleware
    var networkRack = _rack.NetworkRack.sharedInstance();
    networkRack.useAfter(_serialize.SerializeMiddleware, new _http.HttpMiddleware());

    // Use Device Adapter
    _device.Device.use(new _device2.DeviceAdapter());

    // Use Popup Adapter
    _popup.Popup.use(new _popup2.PopupAdapter());
  }

  _createClass(KinveyProvider, [{
    key: 'init',
    value: function init() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return _kinveyJavascriptSdkCore.Kinvey.init(options);
    }
  }, {
    key: '$get',
    value: function $get() {
      return _kinveyJavascriptSdkCore.Kinvey;
    }
  }]);

  return KinveyProvider;
}();
//# sourceMappingURL=provider.js.map
