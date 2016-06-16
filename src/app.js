angular.module('newApp', [])
 .controller('newAppController', function newAppController(){

   var self = this;

   self.password = '';
   self.grade = function(){
     if(self.password.length > 8){
        self.strength = 'strong';
      } else if (self.password.length <4){
        self.strength = 'weak';
      } else {
        self.strength = 'acceptable';
      }
      //self.password.length > 8 ? self.strength = 'strong' : self.password.length < 4 ? self.strength = 'weak' : self.strength = 'acceptable';
   };
});
