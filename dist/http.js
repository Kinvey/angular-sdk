'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpMiddleware = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _middleware = require('kinvey-javascript-sdk-core/dist/rack/middleware');

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-line no-unused-vars

var HttpMiddleware = exports.HttpMiddleware = function (_KinveyMiddleware) {
  _inherits(HttpMiddleware, _KinveyMiddleware);

  function HttpMiddleware() {
    _classCallCheck(this, HttpMiddleware);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HttpMiddleware).call(this, 'Kinvey Angular Http Middleware'));
  }

  _createClass(HttpMiddleware, [{
    key: 'handle',
    value: function () {
      var ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(request) {
        var url, method, headers, body, $injector, $http, response;
        return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _get(Object.getPrototypeOf(HttpMiddleware.prototype), 'handle', this).call(this, request);

              case 2:
                url = request.url;
                method = request.method;
                headers = request.headers;
                body = request.body;
                $injector = angular.injector(['ng']);
                $http = $injector.get('$http');
                _context.prev = 8;
                _context.next = 11;
                return $http({
                  url: url,
                  method: method,
                  headers: headers.toJSON(),
                  data: body
                });

              case 11:
                response = _context.sent;


                request.response = {
                  statusCode: response.status,
                  headers: response.headers(),
                  data: response.data
                };

                return _context.abrupt('return', request);

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](8);

                request.response = {
                  statusCode: _context.t0.status,
                  headers: _context.t0.headers(),
                  data: _context.t0.data
                };

                return _context.abrupt('return', request);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 16]]);
      }));

      function handle(_x) {
        return ref.apply(this, arguments);
      }

      return handle;
    }()
  }]);

  return HttpMiddleware;
}(_middleware.KinveyMiddleware);