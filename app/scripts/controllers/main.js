'use strict';

angular.module('liveBrokerHttpClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.environments = [
      'http://pal.sandbox.dev.bbc.co.uk:8360/live-broker',
      'http://api.int.bbc.co.uk/live-broker',
      'http://api.test.bbc.co.uk/live-broker',
      'http://api.stage.bbc.co.uk/live-broker',
      'http://api.bbc.co.uk/live-broker'
    ];
  });
