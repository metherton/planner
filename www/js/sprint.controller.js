(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('SprintCtrl', SprintCtrl);

  SprintCtrl.$inject = ['sprints'];

  function SprintCtrl(sprints) {

    var vm = this;

    vm.sprints = sprints;
  }
})();

