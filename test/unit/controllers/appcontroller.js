'use strict';

describe('Controller: AppCtrl', function() {

    beforeEach(module('starter.controllers'));

    var AppCtrl, scope, mockIonicModal, $q, deferredModal;

    beforeEach(function() {
       mockIonicModal = {
         fromTemplateUrl: function() {
            deferredModal = $q.defer();
            return deferredModal.promise;
       }
    };
  });

    beforeEach(inject(function($controller, $rootScope, _$q_) {
      $q = _$q_;

      scope = $rootScope.$new();
      AppCtrl = $controller('AppCtrl', {
        $scope: scope,
        $ionicModal: mockIonicModal
      });


    }));

    it('should initialize scope variables', function() {
        expect(scope.loginData).toBeDefined();
    });

    it('should initialize scope modal variable', function() {
           deferredModal.resolve({});
           scope.$digest();
           expect(scope.modal).toBeDefined();
    });

});
