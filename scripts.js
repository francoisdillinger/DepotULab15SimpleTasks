
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
          
          this.friends = myFriends;   
          console.log('submitting');    
          
            var myFriends = [
              { name : 'me'},
              { name : 'myself'},
              { name : 'and I'},
              { name : 'mojo'},
              { name : 'Mr. Bubbles'},
              { name : 'C-dub'},
              { name : 'Rara'},
              { name : 'Bita'},
              { name : 'Buttmay'},
              { name : 'Tony'}  
          ]; 
      };   
  });
  
})();