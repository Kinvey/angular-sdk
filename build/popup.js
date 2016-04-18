'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @private
 */

var Popup = exports.Popup = function (_EventEmitter) {
  _inherits(Popup, _EventEmitter);

  function Popup() {
    var url = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];

    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this));

    _this.url = url;
    return _this;
  }

  _createClass(Popup, [{
    key: 'open',
    value: function open() {
      var _this2 = this;

      var promise = new Promise(function (resolve, reject) {
        _this2.popup = global.open(_this2.url, '_blank', 'toolbar=no,location=no');

        if (_this2.popup) {
          _this2.interval = setInterval(function () {
            if (_this2.popup.closed) {
              _this2.closeHandler();
            } else {
              try {
                _this2.loadHandler({
                  url: _this2.popup.location.href
                });
              } catch (e) {
                // catch any errors due to cross domain issues
              }
            }
          }, 100);
        } else {
          return reject(new Error('The popup was blocked.'));
        }

        return resolve(_this2);
      });

      return promise;
    }
  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      var promise = new Promise(function (resolve) {
        _this3.popup.close();
        resolve();
      });
      return promise;
    }
  }, {
    key: 'loadHandler',
    value: function loadHandler(event) {
      this.emit('loaded', event.url);
    }
  }, {
    key: 'clickHandler',
    value: function clickHandler() {
      this.close();
    }
  }, {
    key: 'closeHandler',
    value: function closeHandler() {
      clearTimeout(this.interval);
      this.emit('closed');
    }
  }]);

  return Popup;
}(_events.EventEmitter);