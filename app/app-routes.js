(function () {
  'use strict';

  angular
    .module('ngPolyDev')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
