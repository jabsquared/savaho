/*
 * Reina by jabSquared
 * Plugin: angular-deckgrid by André König <akoenig@posteo.de>
 **
 */

/**
 * @author jabSquared (jabsquared@tuta.io)
 *
 */

angular.module('reina', [
  'ngRoute',
  'akoenig.deckgrid'
]);

angular.module('reina').config([

  '$routeProvider',

  function configure($routeProvider) {

    'use strict';

    $routeProvider.when('/', {
      controller: 'HomeController',
      templateUrl: 'templates/home.html'
    });

  }
]);
