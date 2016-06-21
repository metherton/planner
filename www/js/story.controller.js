(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('StoryCtrl', StoryCtrl);

  StoryCtrl.$inject = ['stories', '$ionicModal', '$scope'];

  function StoryCtrl(stories, $ionicModal, $scope) {

    var vm = this;

    vm.stories = stories;

    $ionicModal.fromTemplateUrl('templates/updateStory.html', {
      scope: $scope
    }).then(function (modal) {
      vm.updateStoryForm = modal;
    });

    vm.updateStory = function (index) {
      vm.story = vm.stories[index];
      vm.updateStoryForm.show();
    };

  }
})();

