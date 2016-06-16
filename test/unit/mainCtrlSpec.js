describe('test getting data', function(){

  beforeEach(module('appName'));

  var $controller;

  beforeEach(inject(function(_$controller_, _$httpBackend_) {
    $controller = _$controller_;
    $scope = {};
    $httpBackend = _$httpBackend_;
  }));

});
