(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('SprintCtrl', SprintCtrl);

  SprintCtrl.$inject = ['sprints'];

  function SprintCtrl(sprints) {

    var vm = this;

    console.log('in SprintCtrl');
    vm.sprints = sprints;
    console.log(sprints);

  }
})();

