(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('SprintCtrl', SprintCtrl);

  SprintCtrl.$inject = ['$scope', 'sprints'];

  function SprintCtrl($scope, sprints) {

    console.log('in SprintCtrl');
    $scope.sprints = sprints;
    console.log(sprints);

  }
})();

