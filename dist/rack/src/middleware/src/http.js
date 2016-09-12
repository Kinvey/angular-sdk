'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpMiddleware = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kinveyJavascriptRack = require('kinvey-javascript-rack');

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


// eslint-disable-line import/no-unresolved
var $injector = _angular2.default.injector(['ng']);

var HttpMiddleware = exports.HttpMiddleware = function (_Middleware) {
  _inherits(HttpMiddleware, _Middleware);

  function HttpMiddleware() {
    var name = arguments.length <= 0 || arguments[0] === undefined ? 'Angular Http Middleware' : arguments[0];

    _classCallCheck(this, HttpMiddleware);

    return _possibleConstructorReturn(this, (HttpMiddleware.__proto__ || Object.getPrototypeOf(HttpMiddleware)).call(this, name));
  }

  _createClass(HttpMiddleware, [{
    key: 'handle',
    value: function () {
      var _ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(request) {
        var url, method, headers, body, $http, response;
        return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = request.url;
                method = request.method;
                headers = request.headers;
                body = request.body;
                $http = $injector.get('$http');
                _context.prev = 5;
                _context.next = 8;
                return $http({
                  url: url,
                  method: method,
                  headers: headers,
                  data: body
                });

              case 8:
                response = _context.sent;
                return _context.abrupt('return', {
                  response: {
                    statusCode: response.status,
                    headers: response.headers(),
                    data: response.data
                  }
                });

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](5);
                return _context.abrupt('return', {
                  response: {
                    statusCode: _context.t0.status,
                    headers: _context.t0.headers(),
                    data: _context.t0.data
                  }
                });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 12]]);
      }));

      function handle(_x2) {
        return _ref.apply(this, arguments);
      }

      return handle;
    }()
  }]);

  return HttpMiddleware;
}(_kinveyJavascriptRack.Middleware);