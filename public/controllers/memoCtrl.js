app.controller('memoCtrl', function($scope, $http, $routeParams, $location) {

  getMyMemo = function(){
    console.log("function getMyMemo was called");
    $http.get("/api/memo/" + $routeParams.id)
    .then(
      function(res){
        console.log("function getMyMemo success");
        //console.log(res.data);
        $scope.res = res.data;
      },
      function(res){
        console.log("function getMyMemo error");
      }
    )
  }

  /*
  It deletes a memo and call to getMemos
  */
  $scope.deleteMemo = function(id){
    console.log("function deleteMemo was called");
    $http.delete("/api/memo/" + id)
    .then(
      function(data){
        console.log("DELETE /api/memo success");
        if(!data.data.error){
          $scope.res = {"error": true, "message": "Memo deleted"};
        }
      },
      function(){
        console.log("DELETE /api/memo error");
      }
    )
  }

  $scope.goBack = function(){
    $location.path("/welcome");
  }

  getMyMemo();
});
