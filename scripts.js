
(function(){
  // This is the module for the 'simple tasks'.  
    
  var app = angular.module("simpleTasks", []);
  
  // This is the controller for the page. Clicking the first button calls an alert.
  
  app.controller('button', function($scope){
      $scope.buttonClick = function(){
          alert('Wasssuuup!');
      };
      
  // This is the function for the second button. It pulls the value of the input and alerts it.   
  // All of the code for the div changing color was done in the html doc using angular, so no code was needed in this doc.    
      $scope.anotherClick = function(){
          alert($scope.message);
      };
      
  // This function is called when the text was clicked, causing it to generate a random color in my array.     
      
      $scope.changeColor = function() {
          var color = ['red', 'blue', 'green', 'grey', 'yellow', 'pink'];
          var num = Math.floor(Math.random() * 6) + 1;
          return color[num];
      };
      
  // This is the code for the button that generates my name in an empty div.    
      
      $scope.generateMyName = function() {
          $scope.myName = 'James!'
      };
      
  // This is the code that displays an array of my friends, each in their on 'li' tag using 'ng-repeat'.    
      
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
      };   
  });
})();