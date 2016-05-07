'use strict';

describe('Controller: AppCtrl', function() {

    beforeEach(module('starter.controllers'));

    var AppCtrl, scope, mockIonicModal, $q, deferredModal;

    //beforeEach(module(function($provide) {
    //  mockIonicModal = {
    //    fromTemplateUrl: function() {return deferredModal.promise;}
    //  };
    //  $provide.value('$ionicModal', mockIonicModal);
    //}));

  beforeEach(function() {
    mockIonicModal = {
      fromTemplateUrl: function() {
        deferredModal = $q.defer();
        return deferredModal.promise;
      }
    };
    //$provide.value('$ionicModal', mockIonicModal);
  });

    beforeEach(inject(function($controller, $rootScope, _$q_) {
      $q = _$q_;

      scope = $rootScope.$new();
      AppCtrl = $controller('AppCtrl', {
        $scope: scope,
        $ionicModal: mockIonicModal
      });

      //mockIonicModal = {
      //  fromTemplateUrl: function() {return deferredModal.promise;}
      //};


    }));

    function setUpController(resolve) {
      var fromTemplateUrl = $q.defer();
      spyOn($ionicModal, 'fromTemplateUrl').andReturn(fromTemplateUrl.promise);


      scope = $rootScope.$new();
      AppCtrl = $controller('AppCtrl', {
        $scope: scope,
        $ionicModal: mockIonicModal
      });

      if(resolve) {
        $scope.$apply(function() {
          fromTemplateUrl.resolve();
        });
      } else {
        $scope.$apply(function() {
          fromTemplateUrl.reject();
        });
      }
    }

    it('should initialize scope variables', function() {
   //   setUpController(PROMISE.resolve);
        expect(scope.loginData).toBeDefined();
    });

});
