app.controller('loginCtrl', function($scope, $http, $rootScope, $location) {

  $scope.login = function(){
    $http.get("/api/user/" + $scope.username + "/" + $scope.password)
    .then(
      function(res){
        console.log(res);
        $rootScope.username = $scope.username;
        $rootScope.password = $scope.password;
        $rootScope.res = res.data;
        $location.path("/welcome");
      },
      function(res){
        console.log("Work not works");
      }
    )
  }

});
