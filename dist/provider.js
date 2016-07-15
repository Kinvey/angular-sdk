'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KinveyProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kinvey = require('./kinvey');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KinveyProvider = exports.KinveyProvider = function () {
  function KinveyProvider() {
    _classCallCheck(this, KinveyProvider);
  }

  _createClass(KinveyProvider, [{
    key: 'init',
    value: function init(options) {
      return _kinvey.Kinvey.init(options);
    }
  }, {
    key: '$get',
    value: function $get() {
      return _kinvey.Kinvey;
    }
  }]);

  return KinveyProvider;
}();