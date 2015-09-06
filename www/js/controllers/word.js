angular.module('starter.controllers')
  .controller('word_ctrl', ['$scope', '$rootScope', '$http', '$window', function($scope, $rootScope, $http, $window) {

    $scope.word_container = [];
    
    var init = function() {
     var req_url = 'http://s.05day.com/home/1';
      //var req_url = 'http://127.0.0.1:3000/home/1';
      
      $http.get(req_url).
	success(function(data, status, headers, config) {
	  var rtn = data;
	  $scope.home_container = rtn.home_container;

	}).
	error(function(data, status, headers, config) {
	  alert('[error] word 요청중');
	});

    };
    
    init();

    $scope.do_qword = function() {
      $window.location = "#app/qword/12345";
    };


    
  }]);
