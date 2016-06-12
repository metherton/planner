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
    //  vm.sprint.$update(function (response) {
    //    console.log(response.data);
    ////    $scope.$apply();
    //  });
      sprintFactory.update({id: vm.sprint._id}, vm.sprint).$promise.then(refreshData);

    }

    function refreshData() {
      vm.sprint = sprintFactory.get(vm.sprint._id).$promise.then(function(data) {
        vm.sprint = data;
      });
    }

    function handleSwipeDown(storyId) {
      console.log('swipe down', storyId);
      var index;
      for (var i = 0; i < vm.sprint.stories.length; i++) {
        if (vm.sprint.stories[i]._id === storyId) {
          index =  i;
          console.log('story to delete is ', storyId);
          console.log('index is ', i);
          break;
        }
      }
      if (index !== undefined) {
        vm.sprint.stories.splice(index);
        sprintFactory.update({id: vm.sprint._id}, vm.sprint).$promise.then(refreshData);
 //       vm.sprint.$update(function (response) {
 //         console.log(response.data);
 ////         $scope.$apply();
 //       });
      }
    }
  }
})();

