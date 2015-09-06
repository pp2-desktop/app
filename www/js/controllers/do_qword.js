angular.module('starter.controllers')
  .controller('doqword_ctrl', ['$scope', '$rootScope', '$http', '$stateParams', '$interval', '$ionicScrollDelegate', '$timeout', '$window', '$ionicHistory', function($scope, $rootScope, $http, $stateParams, $interval, $ionicScrollDelegate, $timeout, $window, $ionicHistory) {

    $scope.$on('back_btn', function() {
      alert('b');
    });
    
    var incomplete_questions = [ 
      {
        "title" : "<b>appropriate 의 뜻은?</b>",
        "correct_num" : "1",
        "solution" : "<p>아무도 신경 쓰지 않고 자신만 신경 쓰는 사람은 “아마도” 백만장자이다. </p><br>\n<p>이 문장에서는 be동사 is를 꾸며주는 부사가 필요하므로 문맥의 파악 없이 답이 부사인 probably라는 것을 유추해 볼 수 있다.</p>",
        "answers" : [ 
          {
            "0" : "맛이 좋은"
          }, 
          {
            "1" : "적절한"
          }, 
          {
            "2" : "걱정되는"
          }, 
          {
            "3" : "두려운"
          }
        ]
      }, 
      {
        "title" : "<b>alternative 의 뜻은? </b>",
        "correct_num" : "3",
        "solution" : "<p>미국에서 판매되는 대부분의 전자 제품은 제조상의 결함에 대비하여 품질 보증서가 따라 나온다. </p><br>\n<p>명사 warranty 뒤에는 보통 전치사 against나 on이 나온다. </p>\n<p>전치사가 앞에 나올 때는 under를 사용하여 under warranty, 즉 보증 기간 중이라는 뜻이다.</p>",
        "answers" : [ 
          {
            "0" : "대안"
          }, 
          {
            "1" : "고정"
          }, 
          {
            "2" : "돌리다"
          }, 
          {
            "3" : "슬픈"
          }
        ]
      },
      {
        "title" : "<b>appreciate 의 뜻은? </b>",
        "correct_num" : "3",
        "solution" : "<p>미국에서 판매되는 대부분의 전자 제품은 제조상의 결함에 대비하여 품질 보증서가 따라 나온다. </p><br>\n<p>명사 warranty 뒤에는 보통 전치사 against나 on이 나온다. </p>\n<p>전치사가 앞에 나올 때는 under를 사용하여 under warranty, 즉 보증 기간 중이라는 뜻이다.</p>",
        "answers" : [ 
          {
            "0" : "감사하다"
          }, 
          {
            "1" : "좋아하다"
          }, 
          {
            "2" : "시러하다"
          }, 
          {
            "3" : "돈을 빌려주다"
          }
        ]
      }
      
    ];
    
    var iq = incomplete_questions;
    $scope.incompleteQuizs = [];
    
    for(var i=0; i<iq.length; i++) {

      var each_quiz = {};
      each_quiz.question = iq[i].title;
      each_quiz.correct_ans = iq[i].correct_num;
      each_quiz.explain = iq[i].solution;

      each_quiz.ans = -1;
      each_quiz.is_correct = false;
      each_quiz.choices = [];

      for(var k in iq[i].answers)  {
	
	var pObj = iq[i].answers[k];
	for(var p  in pObj) {
	  
	  var choice = pObj[p];
	  each_quiz.choices.push(choice);
	}
      }
      $scope.incompleteQuizs.push(each_quiz);
    }


    $scope.do_word = function() {
      $window.location = "#app/word/12345";
    };

    $scope.stage = 'pre_quiz';

    $scope.is_pre_quiz_result = false;
    $scope.pre_quiz_result = function() {
      $scope.is_pre_quiz_result = true;
      $ionicScrollDelegate.scrollTop(true);
    };


    $scope.myGoBack = function() {
      $ionicHistory.goBack();
      //alert(';fuyck');
      //$ionicHistory.goBack();
    };
    
  }]);



angular.module('starter.controllers').directive('dynamic', function ($compile) {

  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});
