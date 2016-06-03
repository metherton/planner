(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('StoryCtrl', StoryCtrl);

  StoryCtrl.$inject = ['stories'];

  function StoryCtrl(stories) {

    var vm = this;

    vm.stories = stories;
  }
})();

