app.controller('loginCtrl', function($scope, $http, $rootScope, $location) {

  $scope.login = function(userToLogin){
    console.log("function login was called");
    $http.get("/api/user/" + userToLogin.username + "/" + userToLogin.password)
    .then(
      function(res){
        console.log("GET /api/user success");
        $rootScope.res = res.data;
        if(res.data.error){
          console.log("Error");
        }else{
          console.log(res.data);
          $rootScope.username = userToLogin.username;
          $rootScope.password = userToLogin.password;
          $location.path("/welcome");
        }
      },
      function(res){
        console.log("GET /api/user error");
        console.log("Work not works");
      }
    )
  }

  $scope.singup = function(userToCreate){
    $http.post("/api/user",userToCreate)
    .success(function(res){
      console.log("POST /api/user success");
      $rootScope.res = res;
    }).error(function(res){
      console.log("POST /api/user error");
      $rootScope.res = res;
    });
  }

});
