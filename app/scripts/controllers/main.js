'use strict';

angular.module('liveBrokerHttpClientApp')
  .controller('MainCtrl', function ($scope) {

    $scope.environments = {
      sandbox: 'http://pal.sandbox.dev.bbc.co.uk:8360/live-broker',
      int: 'http://api.int.bbc.co.uk/live-broker',
      test: 'http://api.test.bbc.co.uk/live-broker',
      stage: 'http://api.stage.bbc.co.uk/live-broker',
      live: 'http://api.bbc.co.uk/live-broker'
    };

    $scope.url = {
      base: "",
      requests: []
    }

    $scope.services = [
      {
        "service": "Eavis",
        "types": [
          {
            "title": "Set List",
            "endpoint": "setlist",
            "parameters": [
              {
                "name": "eventId",
                "required": true,
                "description": "The ID associated with the event"
              },
              {
                "name": "coverage",
                "required": true,
                "description": "The ID for the requested coverage"
              }
            ]
          }
        ]
      },
      {
        "service": "Storify",
        "types": [
          {
            "title": "Story",
            "endpoint": "storify",
            "parameters": [
              {
                "name": "username",
                "required": true,
                "description": "The username the story belongs to."
              },
              {
                "name": "story",
                "required": true,
                "description": "The name of the story."
              }
            ]
          }
        ]
      }
    ]

    $scope.addRequest = function() {
      var requestCount = $scope.url.requests.length;

      var request = $scope.request(requestCount);
      $scope.url.requests.push(request);
    };

    $scope.request = function(id) {
      return {
        id: id,
        request: ""
      }
    }



  });
