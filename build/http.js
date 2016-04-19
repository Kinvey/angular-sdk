'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpMiddleware = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _middleware = require('kinvey-javascript-sdk-core/build/rack/middleware');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $injector = angular.injector(['ng']);

var HttpMiddleware = exports.HttpMiddleware = function (_KinveyMiddleware) {
  _inherits(HttpMiddleware, _KinveyMiddleware);

  function HttpMiddleware() {
    _classCallCheck(this, HttpMiddleware);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HttpMiddleware).call(this, 'Kinvey Angular Http Middleware'));

    _this.$http = $injector.get('$http');
    return _this;
  }

  _createClass(HttpMiddleware, [{
    key: 'handle',
    value: function handle(request) {
      var _this2 = this;

      return _get(Object.getPrototypeOf(HttpMiddleware.prototype), 'handle', this).call(this, request).then(function () {
        var promise = _this2.$http({
          url: request.url,
          method: request.method,
          headers: request.headers,
          data: request.data
        }).then(function (response) {
          request.response = {
            statusCode: response.status,
            headers: response.headers(),
            data: response.data
          };

          return request;
        }).catch(function (response) {
          request.response = {
            statusCode: response.status,
            headers: response.headers(),
            data: response.data
          };

          return request;
        });
        return promise;
      });
    }
  }]);

  return HttpMiddleware;
}(_middleware.KinveyMiddleware);