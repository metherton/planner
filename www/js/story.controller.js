(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('StoryCtrl', StoryCtrl);

  StoryCtrl.$inject = ['stories', '$ionicModal', '$scope', '$timeout', 'storyFactory', 'users'];

  function StoryCtrl(stories, $ionicModal, $scope, $timeout, storyFactory, users) {

    var vm = this;

    vm.stories = stories;
    vm.users = users;

    $ionicModal.fromTemplateUrl('templates/updateStory.html', {
      scope: $scope
    }).then(function (modal) {
      vm.updateStoryForm = modal;
    });

    vm.updateStory = function (index) {
      vm.story = vm.stories[index];
      vm.updateStoryForm.show();
    };

    vm.closeUpdateStory = function () {
      vm.updateStoryForm.hide();
    };

    vm.doUpdateStory = function () {
      console.log('Doing create sprint', vm.story);

      storyFactory.update({id: vm.story._id},vm.story).$promise.then(function (response) {
        console.log(response.data);
      });


      // Simulate a reservation delay. Remove this and replace with your reservation
      // code if using a server system
      $timeout(function () {
        vm.closeUpdateStory();
      }, 1000);
    };

  }
})();

