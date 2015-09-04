/*
 * Reina by jabSquared
 * Plugin: angular-deckgrid by André König <akoenig@posteo.de>
 **
 */

/**
 * @author jabSquared (jabsquared@tuta.io)
 *
 */

angular.module('reina').controller('HomeController', [

  '$scope',

  function initialize($scope) {

    'use strict';

    $scope.gals = [{
      id: 'photo-1',
      name: 'Awesome gal',
      src: 'http://lorempixel.com/400/300/abstract'
    }, {
      id: 'photo-2',
      name: 'Great gal',
      src: 'http://lorempixel.com/450/400/city'
    }, {
      id: 'photo-3',
      name: 'Strange gal',
      src: 'http://lorempixel.com/400/300/people'
    }, {
      id: 'photo-4',
      name: 'A gal?',
      src: 'http://lorempixel.com/400/300/transport'
    }, {
      id: 'photo-5',
      name: 'What a gal',
      src: 'http://lorempixel.com/450/300/fashion'
    }, {
      id: 'photo-6',
      name: 'Silly gal',
      src: 'http://lorempixel.com/400/300/technics'
    }, {
      id: 'photo-7',
      name: 'Weird gal',
      src: 'http://lorempixel.com/410/350/sports'
    }, {
      id: 'photo-8',
      name: 'Modern gal',
      src: 'http://lorempixel.com/400/300/nightlife'
    }, {
      id: 'photo-9',
      name: 'Classical gal',
      src: 'http://lorempixel.com/400/300/nature'
    }, {
      id: 'photo-10',
      name: 'Dynamic gal',
      src: 'http://lorempixel.com/420/300/abstract'
    }];

  }

]);
