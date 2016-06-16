describe('appNameConrtoller', function() {
  beforeEach(module('appName'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('first test', function(){
    it('should do something', function(){
      var controller = $controller('appNameController');
    });

  });
});
