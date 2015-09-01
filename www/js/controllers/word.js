angular.module('starter.controllers')
  .controller('word_ctrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $scope.word_container = [];
    
    var init = function() {
      for(var i=0; i<100; i++) {
	var obj = {};
	$scope.word_container.push(obj);
      }
      
    };
     
    init();
    
  }]);
