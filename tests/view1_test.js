'use strict';

describe('shakespeare.view module', function() {

  beforeEach(module('shakespeare.view'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller, $scope) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      var scope = view1Ctrl.scope;
      
      expect(view1Ctrl).toBeDefined();
      expect($scope.avgRating).toBe(0);
    }));

  });
});
