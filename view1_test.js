'use strict';
//
// describe('shakespeare.view module', function() {
//
//   beforeEach(module('shakespeare.view'));
//
//   describe('view1 controller', function(){
//
//     it('should ....', inject(function($controller, $scope) {
//       //spec body
//      assert.equal(1, 1);
//     }));
//
//   });
// });
describe("‘View1Ctrl test’", function() {

// beforeEach(module("shakespeare.view"));
beforeEach(function () {
    module('ngRoute');
    module('shakespeare.view');
});

var View1Ctrl;
var scope;


beforeEach(inject(function ($rootScope, $controller) {
scope = $rootScope.$new();
View1Ctrl = $controller('View1Ctrl', {
$scope: scope
});
}));
it('Default filter is rating', function () {
var test = scope.propertyName;
expect(test).toBe("rating");

});
it('Filter should be in high to low', function () {
var test = scope.reverse;
expect(test).toBe(true);

});

});
