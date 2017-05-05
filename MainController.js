(function() {

   var app = angular.module("MyViewer");

  var MainCtrl = function(
    $scope, $interval, $location) {



    var decrementCountdown = function() {

      $scope.countdown -= 1;

      if ($scope.countdown < 1) {
        $scope.search($scope.searchTerm);
      }

    }


    $scope.search = function(username) {
     
      if (countdownInterval) {
          $interval.cancel(countdownInterval);
          $scope.countdown = null;
        }
      
      $location.path("/user/" + $scope.searchTerm);
      
    };
    
    

    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };


    $scope.countdown = 5;
    startCountdown();
    $scope.searchTerm = "angular";


  };

  app.controller("MainCtrl", MainCtrl);

}());