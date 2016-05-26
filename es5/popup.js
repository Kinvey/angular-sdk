'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AngularPopup = undefined;

var _popup = require('kinvey-phonegap-sdk/es5/popup');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @private
 */

var AngularPopup = exports.AngularPopup = function (_PhoneGapPopup) {
  _inherits(AngularPopup, _PhoneGapPopup);

  function AngularPopup() {
    _classCallCheck(this, AngularPopup);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AngularPopup).apply(this, arguments));
  }

  return AngularPopup;
}(_popup.PhoneGapPopup);