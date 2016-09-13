app.controller('welcomeCtrl', function($scope, $http, $rootScope, $route, Upload) {
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
    console.log("function addMemo was called");
    $scope.memoToAdd.username = $rootScope.username;
    $scope.memoToAdd.password = $rootScope.password;

    Upload.upload({
        url: '/api/memo',
        data: {file: $scope.memoToAdd.file, 'memoToAdd': $scope.memoToAdd}
    }).then(function (resp) {
        console.log('Success');
        if(resp.data.error){
          console.log(resp.data.message);
        }else{
          getMemos();
        }

    }, function (resp) {
        console.log('Error status: ' + resp.status);
    }, function (evt) {
    });
  }

  /*
  It updates var $rootScope.memos
  */
  getMemos = function(){
    console.log("function getMemos was called");
    $http.get("/api/user/" + $rootScope.username + "/" + $rootScope.password)
    .then(function(res){
      console.log("GET /api/user/ success");
      if(res.data.error){
        console.log("Error: " + res.data.message);
      }else{
        $scope.memos = res.data.message.memos;
      }
    }, function(res){
      console.log("GET /api/user/ error");
    });
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
          getMemos();
        }
      },
      function(){
        console.log("DELETE /api/memo error");
      }
    )
  }


});
