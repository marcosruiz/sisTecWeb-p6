app.controller('memoCtrl', function($scope, $http, $rootScope, $routeParams, $location) {

  getMyMemo = function(){
    $http.get("/api/memo/" + $routeParams.id)
    .then(
      function(res){
        console.log("function getMyMemo success");
        $scope.memo = res.data;
      },
      function(res){
        console.log("function getMyMemo error");
      }
    )
  }

  function downloadFile(){
    //$location.path("/api/file/" + $routeParams.id);
    $http.get("/api/file/" + $routeParams.id)
    .then(
      function(res){
        console.log("function downloadFile success");
      },
      function(res){
        console.log("function downloadFile error");
      }
    )
  }

  function deleteMemo(id){
    //TODO
  }

  getMyMemo();
});
