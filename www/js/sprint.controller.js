(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('SprintCtrl', SprintCtrl);

  SprintCtrl.$inject = ['sprints', 'sprint'];

  function SprintCtrl(sprints, sprint) {

    var vm = this;

    vm.sprints = sprints;
    vm.sprint = sprint;
  }
})();

