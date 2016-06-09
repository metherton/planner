(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('CurrentSprintCtrl', CurrentSprintCtrl);

  CurrentSprintCtrl.$inject = ['stories', 'sprint', 'sprintFactory'];

  function CurrentSprintCtrl(stories, sprint, sprintFactory) {

    var vm = this;

    vm.stories = stories;
    vm.sprint = sprint;

    vm.onSwipeUp = handleSwipeUp;

    function handleSwipeUp(storyId) {
      console.log('swipe up', storyId);
      vm.sprint.stories.push(storyId);
      vm.sprint.$update(function (response) {
        console.log(response.data);
      });
    }
  }
})();

