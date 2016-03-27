
(function(){
  var app = angular.module("simpleTasks", []);
  
  app.controller('button', function($scope){
      $scope.buttonClick = function(){
          alert('Wasssuuup!');
      };
      $scope.anotherClick = function(){
          alert($scope.message);
      };
      $scope.changeColor = function() {
          var color = ['red', 'blue', 'green', 'grey', 'yellow', 'pink'];
          var num = Math.floor(Math.random() * 6) + 1;
          return color[num];
      };
      $scope.generateMyName = function() {
          $scope.myName = 'James!'
      };
      $scope.friends = function() {
          
          $scope.friend = [
               'me',
               'myself',
               'and I',
               'mojo',
               'Mr. Bubbles',
               'C-dub',
               'Rara',
               'Bita',
               'Buttmay',
              'Tony'  
          ];    
          console.log('submitting');    
          
           // var myFriends = 
      };   
  });
  
})();