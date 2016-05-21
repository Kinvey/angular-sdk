'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _middleware = require('kinvey-javascript-sdk-core/es5/rack/middleware');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $injector = angular.injector(['ng']);

var AngularHttpMiddleware = function (_KinveyMiddleware) {
  _inherits(AngularHttpMiddleware, _KinveyMiddleware);

  function AngularHttpMiddleware() {
    _classCallCheck(this, AngularHttpMiddleware);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AngularHttpMiddleware).call(this, 'Kinvey Angular Http Middleware'));

    _this.$http = $injector.get('$http');
    return _this;
  }

  _createClass(AngularHttpMiddleware, [{
    key: 'handle',
    value: function handle(request) {
      var _this2 = this;

      var promise = _get(Object.getPrototypeOf(AngularHttpMiddleware.prototype), 'handle', this).call(this, request);
      var url = request.url;
      var method = request.method;
      var headers = request.headers;
      var body = request.body;


      return promise.then(function () {
        // Send the request with $http
        var promise = _this2.$http({
          url: url,
          method: method,
          headers: headers,
          data: body
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

  return AngularHttpMiddleware;
}(_middleware.KinveyMiddleware);

exports.default = AngularHttpMiddleware;