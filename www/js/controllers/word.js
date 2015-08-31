angular.module('starter.controllers')
  .controller('word_ctrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    
    $scope.word_container = [];
    for(var i=0; i<100; i++) {
      var f = 'aa' + i;
      $scope.word_container.push(f);
    }
    
  }]);
