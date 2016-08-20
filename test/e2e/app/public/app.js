'use strict';

window.name = 'NG_DEFER_BOOTSTRAP!';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'kinvey',
  'ui.router',
  'myApp.login'
]);

app.config([
  '$kinveyProvider',
  '$locationProvider',
  '$urlRouterProvider',
  function($kinveyProvider, $locationProvider, $urlRouterProvider) {
    // Init Kinvey
    $kinveyProvider.init({
      appKey: 'kid_HkTD2CJc',
      appSecret: 'cd7f658ed0a548dd8dfadf5a1787568b'
    });

    // For any unmatched url, redirect to /login
    $urlRouterProvider.otherwise('/login');

    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
  }
]);

// angular.bootstrap(document, ['myApp']);
