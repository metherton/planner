// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $http) {
  //.run(function($ionicPlatform, $http) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  //console.log('http', $http.defaults.headers);
  //
  //$http.defaults.headers.get = [];
  //
  //
  //$http.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
  //// extra
  //$http.defaults.headers.get['Cache-Control'] = 'no-cache';
  //$http.defaults.headers.get['Pragma'] = 'no-cache';

})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {



  $stateProvider

  //  .state('app', {
  //  url: '/app',
  //  abstract: true,
  //  templateUrl: 'templates/sidebar.html',
  //  controller: 'AppCtrl',
  //    cache: false,
  //    resolve: {
  //      users: ['userFactory', '$http', function (userFactory, $http) {
  //        return userFactory.query();
  //      }]
  //    }
  //})

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/sidebar.html',
    controller: 'AppCtrl',
    resolve: {
      users: ['userFactory', '$http', function (userFactory, $http) {
        return userFactory.query();
      }]
    }
  })



  //.state('app', {
  //  url: '/app',
  //  abstract: true,
  //  templateUrl: 'templates/sidebar.html',
  //  controller: 'LoginCtrl'
  //})

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.users', {
      url: '/users',
      views: {
        'menuContent': {
          templateUrl: 'templates/users.html',
          controller: 'UserCtrl',
          cache: false,
          resolve: {
            users:  ['userFactory', '$http', function(userFactory, $http){
              console.log($http.defaults.headers.common);
              return userFactory.query();
            }]
            //users:  ['userFactory', '$q', function(userFactory, $q){
            //  var defer = $q.defer();
            //  userFactory.query().$promise.then(
            //    function(response) {
            //      defer.resolve(response);
            //    }
            //    ,
            //    function(error) {
            //      defer.reject(error);
            //    }
            //  );
            //  return defer.promise;
            //}]
          }
        }
      }
    })
    .state('app.playlists', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })



  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/home');
  $urlRouterProvider.otherwise('/app/home');
  //$urlRouterProvider.otherwise('/app/login');
});
