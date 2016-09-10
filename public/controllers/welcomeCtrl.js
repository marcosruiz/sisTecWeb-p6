app.controller('welcomeCtrl', function($scope, $http, $rootScope, $route) {
  $scope.problem = true;
  $scope.memoToAdd = {};
  if(typeof $rootScope.res != "undefined"){
    $scope.memos = $rootScope.res.message.memos;
    $scope.problem = false;
  }
  /*
  It adds a memo to database and update our web
  */
  $scope.addMemo = function(){
    $scope.memoToAdd.username = $rootScope.username;
    $scope.memoToAdd.password = $rootScope.password;
    $http.post("/api/memo", $scope.memoToAdd)
    .success(function(data){
      $rootScope.res = data;
      console.log("POST /api/memo success");
      $route.reload();
    })
    .error(function(){
      console.log("POST /api/memo error");
    })
  }

  deleteMemo = function(id){
    $http.delete("/api/memo/" + id)
    .then(
      function(data){
        console.log("DELETE /api/memo success");
      },
      function(){
        console.log("DELETE /api/memo error");
      }
    )
  }


});
