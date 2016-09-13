app.controller('loginCtrl', function($scope, $http, $rootScope, $location) {

  $scope.login = function(){
    console.log("function login was called");
    $http.get("/api/user/" + $scope.username + "/" + $scope.password)
    .then(
      function(res){
        console.log("GET /api/user success");
        console.log(res);
        $rootScope.username = $scope.username;
        $rootScope.password = $scope.password;
        $rootScope.res = res.data;
        $location.path("/welcome");
      },
      function(res){
        console.log("GET /api/user error");
        console.log("Work not works");
      }
    )
  }

  $scope.singup = function(){
    //TODO
  }

});
