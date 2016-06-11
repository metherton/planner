(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('CurrentSprintCtrl', CurrentSprintCtrl);

  CurrentSprintCtrl.$inject = ['stories', 'sprint', 'sprintFactory', '$scope'];

  function CurrentSprintCtrl(stories, sprint, sprintFactory, $scope) {

    var vm = this;

    vm.stories = stories;
    vm.sprint = sprint;

    vm.onSwipeUp = handleSwipeUp;
    vm.onSwipeDown = handleSwipeDown;

    function handleSwipeUp(storyId) {
      console.log('swipe up', storyId);
      vm.sprint.stories.push(storyId);
      vm.sprint.$update(function (response) {
        console.log(response.data);
        $scope.$apply();
      });
    }

    function handleSwipeDown(storyId) {
      console.log('swipe down', storyId);
      var index;
      for (var i = 0; i < vm.sprint.stories.length; i++) {
        if (vm.sprint.stories[i]._id === storyId) {
          index =  i;
          break;
        }
      }
      if (index !== undefined) {
        vm.sprint.stories.splice(index);
        vm.sprint.$update(function (response) {
          console.log(response.data);
          $scope.$apply();
        });
      }
    }
  }
})();

