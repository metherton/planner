(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('CurrentSprintCtrl', CurrentSprintCtrl);

  CurrentSprintCtrl.$inject = ['stories', 'sprint'];

  function CurrentSprintCtrl(stories, sprint) {

    var vm = this;

    vm.stories = stories;
    vm.sprint = sprint;
  }
})();

