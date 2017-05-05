(function() {

  var app = angular.module("MyViewer");

  var UserCtrl = function(
    $scope, github, $log, $routeParams) {

    var onUserComplete = function(data) {

      $scope.user = data;
      $log.info("Searching for " + $scope.searchTerm)

      github.getRepos($scope.user)
        .then(onRepos, onError);

    }

    var onRepos = function(data) {

      $scope.repos = data;

    };

    var onError = function(reason) {
      console.log("An error occurred");
    };



    $scope.searchTerm = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";

    github.getUser($scope.searchTerm).then(onUserComplete, onError)

  };

  app.controller("UserCtrl", UserCtrl);

}());