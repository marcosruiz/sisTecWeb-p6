app.controller('welcomeCtrl', function($scope, $http, $rootScope) {
  $scope.memos = $rootScope.res.message.memos;

  //TODO No se xk esto no se muestra
  //$scope.showme = true;
});
