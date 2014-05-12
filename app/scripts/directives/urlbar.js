'use strict';

angular.module('liveBrokerHttpClientApp')
.directive('urlBar', function () {
    return {
      template: '<div><input class="urlbar" type="text"><div class="btn-group"><button class="btn btn-default">Visit</button><button class="btn btn-default">Copy</button></div></div>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
          console.log(scope.environments);
          $(element).find('.urlbar').on('change paste', urlBarChanged);

          function urlBarChanged(event) {
            var currentUrl = event.target.val;
            console.log(scope.selectedEnvironment);
          }
      }
    };
  });
