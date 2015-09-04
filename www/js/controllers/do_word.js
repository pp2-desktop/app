angular.module('starter.controllers')
  .controller('doword_ctrl', ['$scope', '$rootScope', '$http', '$stateParams', '$interval', function($scope, $rootScope, $http, $stateParams, $interval) {
    
    $scope.title = 'The Daily Show - Exclusive - Barack Obama Extended Interview';
    $scope.vid = 'Z4iZKfql5Qs';
    $scope.is_speak = false;
    $scope.dialogs = [];
    
    $scope.opts = {
      autoplay: 0,
      controls: 0,
      html5: 1,
      modesbranding: 0,
      iv_load_policy: 3,
      showinfo: 0,
      rel:0,
      start: 0,
      end: 200,
      playsinline: 1
    };

    $scope.is_v = true;

    $scope.player = null;
    $scope.sub_type = 1;

    //alert(window.screen.width);

    $scope.sub = [ { dialogs: 
     [ 'We\'re back now with our NBC news investigation ',
       'into the air quality onboard passenger plane.' ],
    id: '﻿1',
    start: 177,
    end: 5622 },
  { dialogs: [ 'Four flight attendants filed a lawsuit against Boeing, which supplies planes to many of the world\'s airline,' ],
    id: '2',
    start: 5620,
    end: 11311 },
  { dialogs: [ 'accusing the manufacturer of knowing about the defect that allows toxic fumes' ],
    id: '3',
    start: 11310,
    end: 15955 },
  { dialogs: [ 'to leak through the engines and into the cabin' ],
    id: '4',
    start: 16155,
    end: 18800 },
  { dialogs: [ 'potentially affecting the air all of us breathe on board.' ],
    id: '5',
    start: 18800,
    end: 22200 },
  { dialogs: [ 'Here\'s NBC\'s Tom Costello.' ],
    id: '6',
    start: 22200,
    end: 23977 },
  { dialogs: [ 'July 12th, 2013' ],
    id: '7',
    start: 25970,
    end: 27755 },
  { dialogs: [ 'A medical emergency onboard Alaska Airlines flight 769,' ],
    id: '8',
    start: 27750,
    end: 31911 },
  { dialogs: [ 'the plane diverted to Chicago.' ],
    id: '9',
    start: 32088,
    end: 33910 },
  { dialogs: [ 'We immediately began to feel ill.' ],
    id: '10',
    start: 33910,
    end: 36600 },
  { dialogs: [ 'Just dizzy, nauseous, ' ],
    id: '11',
    start: 36600,
    end: 39377 },
  { dialogs: [ 'we just couldn\'t think straight.' ],
    id: '12',
    start: 39370,
    end: 41444 },
  { dialogs: [ 'Four flight attendants complaining of nauseous chemical fumes in the cabin,' ],
    id: '13',
    start: 41440,
    end: 45333 },
  { dialogs: [ 'two of them passed out.' ],
    id: '14',
    start: 45330,
    end: 47044 },
  { dialogs: [ 'Paramedics rushed all four to the hospital,' ],
    id: '15',
    start: 47040,
    end: 49133 },
  { dialogs: [ 'sick, disoriented and struggling to concentrate.' ],
    id: '16',
    start: 49130,
    end: 52288 },
  { dialogs: 
     [ 'Most modern aircraft get fresh air by ',
       'bleeding outside air to the plane\'s engines and into the cabin.' ],
    id: '17',
    start: 52280,
    end: 58222 },
  { dialogs: [ 'But a burning oil leaks inside the engine,' ],
    id: '18',
    start: 58220,
    end: 60822 },
  { dialogs: [ 'it can send toxic fumes through the plane\'s ventilation system.' ],
    id: '19',
    start: 60820,
    end: 63888 },
  { dialogs: 
     [ 'Two years since the incident, Vanessa Woods and two fellow flight attendants',
       'claim tremors, neurological and memory issues' ],
    id: '20',
    start: 63880,
    end: 70288 },
  { dialogs: [ 'have kept them from returning to work.' ],
    id: '21',
    start: 70288,
    end: 72280 },
  { dialogs: [ 'I\'m hoping that I\'ll make a recovery,' ],
    id: '22',
    start: 72280,
    end: 75422 },
  { dialogs: [ 'at least to recover, you know, some sort of life.' ],
    id: '23',
    start: 75420,
    end: 79533 },
  { dialogs: [ 'Now all four flight attendants are suing Boeing' ],
    id: '24',
    start: 79530,
    end: 82244 },
  { dialogs: [ 'claiming it\'s been aware of the danger for decades.' ],
    id: '25',
    start: 82240,
    end: 84755 },
  { dialogs: [ 'Included in the suit, this 2007 email from a Boeing engineer who laments,' ],
    id: '26',
    start: 84750,
    end: 89422 },
  { dialogs: [ '"Bottom line is I think we are looking for a tombstone' ],
    id: '27',
    start: 89420,
    end: 92088 },
  { dialogs: [ 'before anyone with any horsepower is going to take interest."' ],
    id: '28',
    start: 92080,
    end: 95333 },
  { dialogs: [ 'In 2012, a British Airways pilot, Richard Westgate, died.' ],
    id: '29',
    start: 95330,
    end: 99400 },
  { dialogs: [ 'A British Coroner found symptoms consistent with exposure' ],
    id: '30',
    start: 99400,
    end: 102555 },
  { dialogs: [ 'organo-phosphate compounds,' ],
    id: '31',
    start: 102550,
    end: 104577 },
  { dialogs: [ 'engine oil additives in the air craft cabin air.' ],
    id: '32',
    start: 104570,
    end: 107466 },
  { dialogs: [ 'The nation\'s largest flight attendant union estimates toxic fume events happen at least once a day,' ],
    id: '33',
    start: 107460,
    end: 112466 },
  { dialogs: [ 'potentially affecting thousands of crew members and passengers,' ],
    id: '34',
    start: 112460,
    end: 115888 },
  { dialogs: [ 'but there is no good data on how many people have been exposed.' ],
    id: '35',
    start: 115880,
    end: 119333 },
  { dialogs: 
     [ 'They may not realize that they are sick ',
       'or that it was caused from this contaminated air.' ],
    id: '36',
    start: 119330,
    end: 123622 },
  { dialogs: [ 'So, they are not getting properly treated' ],
    id: '37',
    start: 123620,
    end: 125888 },
  { dialogs: [ 'for that poisonous fumes that are in their system.' ],
    id: '38',
    start: 125880,
    end: 129977 },
  { dialogs: [ 'Boeing declined to comment on this suit, but has always insisted,' ],
    id: '39',
    start: 130088,
    end: 133155 },
  { dialogs: 
     [ '"Cabin air is safe to breathe" and',
       '"Contaminant levels are generally low."' ],
    id: '40',
    start: 133150,
    end: 138000 },
  { dialogs: [ 'But its newest aircraft 787 does not use bleed air to ventilate the cabin.' ],
    id: '41',
    start: 138000,
    end: 143022 },
  { dialogs: [ 'Tom Costello, NBC News, Washington.' ],
    id: '42',
    start: 143020,
    end: 145200 },
  { dialogs: [ '*Subscribe NBC News Channel*' ],
    id: '43',
    start: 145200,
    end: 150377 } ];


       $scope.ksub = [ { dialogs: [ '여객기 안에의 공기 청정도에 대한 NBC뉴스 수사 소식으로', '프로그램을 다시 진행해 보겠습니다.' ],
    id: '﻿1',
    start: 177,
    end: 5622 },
  { dialogs: [ '전 세계 항공사들에게 항공기를 공급하는 보잉사를, 4명의 승무원들이 고소 했습니다.' ],
    id: '2',
    start: 5620,
    end: 11311 },
  { dialogs: [ '객실과 엔진에 독성 가스가 흘러 들어가서 잠재적으로 모든 사람이 선상에서 숨쉬게 되는 결함을' ],
    id: '3',
    start: 11310,
    end: 15955 },
  { dialogs: [ '제조사로서 알고 있었다라는 혐의를' ],
    id: '4',
    start: 16155,
    end: 18800 },
  { dialogs: [ '제기하고 있습니다.' ], id: '5', start: 18800, end: 22200 },
  { dialogs: [ '이제 NBC의 톰 코스텔로 입니다.' ],
    id: '6',
    start: 22200,
    end: 23977 },
  { dialogs: [ '7월 12일, 2013년' ],
    id: '7',
    start: 25970,
    end: 27755 },
  { dialogs: [ '알래스카 769번 객실에서 의료 긴급상황이 생겨서,' ],
    id: '8',
    start: 27750,
    end: 31911 },
  { dialogs: [ '항공기는 시카고로 항로를 바꿉니다.' ],
    id: '9',
    start: 32088,
    end: 33910 },
  { dialogs: [ '우리는 바로 아프기 시작했습니다.' ],
    id: '10',
    start: 33910,
    end: 36600 },
  { dialogs: [ '어지러움증, 메스꺼움을 느끼고, ' ],
    id: '11',
    start: 36600,
    end: 39377 },
  { dialogs: [ '제대로 생각도 할 수 없는 상태였습니다.' ],
    id: '12',
    start: 39370,
    end: 41444 },
  { dialogs: [ '4명의 승무원들은 메스꺼움을 유발하는 객실 안의 화학 가스에 대해서 호소했고' ],
    id: '13',
    start: 41440,
    end: 45333 },
  { dialogs: [ '그중 두명은 기절 했다.' ],
    id: '14',
    start: 45330,
    end: 47044 },
  { dialogs: [ '응급 조치 요원은 모든 4명을 병원에 긴급 수송했습니다.' ],
    id: '15',
    start: 47040,
    end: 49133 },
  { dialogs: [ '메스껍고, 집중을 할 수 없고 인식 기능을 상실한 상태였습니다.' ],
    id: '16',
    start: 49130,
    end: 52288 },
  { dialogs: [ '대부분의 항공기가 신선한 공기를', '밖의 공기를 엔진과 객실로 압축하여 넣어주는 식으로 얻고 있습니다.' ],
    id: '17',
    start: 52280,
    end: 58222 },
  { dialogs: [ '그러나 연소되고 있는 기름이 엔진 안으로 세어 들어가면,' ],
    id: '18',
    start: 58220,
    end: 60822 },
  { dialogs: [ '독소 가스가 환기 시스템으로 보내질 것입니다.' ],
    id: '19',
    start: 60820,
    end: 63888 },
  { dialogs: 
     [ '지금 2년이 지낫지만, 베네사 우즈와 다른 두 승무원들은',
       '손 떨림, 뇌적 손상 그리고 기억력에 손상이' ],
    id: '20',
    start: 63880,
    end: 70288 },
  { dialogs: [ '다시 일자리로 돌아가는 것을 막고 있다고 주장합니다.' ],
    id: '21',
    start: 70288,
    end: 72280 },
  { dialogs: [ '저는 제가 회복하길 바라고 있습니다.' ],
    id: '22',
    start: 72280,
    end: 75422 },
  { dialogs: [ '최소한 조금의 인생을 되찾을 만하게 말입니다.' ],
    id: '23',
    start: 75420,
    end: 79533 },
  { dialogs: [ '현재 4명의 승무원 모두 10년 이상 이 위험성을' ],
    id: '24',
    start: 79530,
    end: 82244 },
  { dialogs: [ '보잉이 알고 있었다는 혐의로 고소를 한 상태 입니다.' ],
    id: '25',
    start: 82240,
    end: 84755 },
  { dialogs: [ '고소 내용에는, 2007년 보잉 엔지니어가 한탄하면서 보낸 이메일이 포함되어 있습니다,' ],
    id: '26',
    start: 84750,
    end: 89422 },
  { dialogs: [ '"결론적으로 저는 큰 영향력 있는 세력이 관심을 갖기 전까지' ],
    id: '27',
    start: 89420,
    end: 92088 },
  { dialogs: [ '묘석을 찾고 있는 것이라고 생각합니다."' ],
    id: '28',
    start: 92080,
    end: 95333 },
  { dialogs: [ '2012년엔, 브리티시 에어웨이 조종사인, 리차드 웨스트게이트가, 사망하였습니다.' ],
    id: '29',
    start: 95330,
    end: 99400 },
  { dialogs: [ '영국 검사관은 항공기 객실 공기에 떠다니는 엔진 오일 첨가물인 ' ],
    id: '30',
    start: 99400,
    end: 102555 },
  { dialogs: [ '오르가노 인산염에 노출된 증상과' ],
    id: '31',
    start: 102550,
    end: 104577 },
  { dialogs: [ '일치하는 증상을 찾았습니다.' ],
    id: '32',
    start: 104570,
    end: 107466 },
  { dialogs: [ '국가에서 가장 큰 승무원 노조는 최소 매일 한명씩 독소 가스 이벤트가 발생한다고', '추정하고 있고,' ],
    id: '33',
    start: 107460,
    end: 112466 },
  { dialogs: [ '잠재적으로 몇 천명의 승무원들과 승객들에게 영향을 미칠 수 있지만,' ],
    id: '34',
    start: 112460,
    end: 115888 },
  { dialogs: [ '얼마나 많은 사람들이 노출 됫는지에 대한 데이터는 없습니다.' ],
    id: '35',
    start: 115880,
    end: 119333 },
  { dialogs: [ '사람들은 자신이 아픈지를 잘 모르거나 ', '그 아픔이 오염된 공기에서 발생된 것인지 잘 모릅니다.' ],
    id: '36',
    start: 119330,
    end: 123622 },
  { dialogs: [ '그래서 사람들은 그 독 가스가 몸 안에 있는데도' ],
    id: '37',
    start: 123620,
    end: 125888 },
  { dialogs: [ '알맞은 치료를 받지 못하고 있습니다.' ],
    id: '38',
    start: 125880,
    end: 129977 },
  { dialogs: [ '보잉은 이 소송에 관련해서는 코멘트 하기를 거부했지만, 항상 강조하는것이' ],
    id: '39',
    start: 130088,
    end: 133155 },
  { dialogs: [ '"객실 공기는 숨쉬기 안전하다" 그리고', '"오염 지수는 보통 낮다." 입니다.' ],
    id: '40',
    start: 133150,
    end: 138000 },
  { dialogs: 
     [ '그러나 보잉의 새로운 항공기인 787은 압축된 밖 공기를 객실 환기 시스템으로',
       '흘려 보내지 않습니다.' ],
    id: '41',
    start: 138000,
    end: 143022 },
  { dialogs: [ '톰 코스텔로, NBC뉴스, 워싱턴 이였습니다.' ],
    id: '42',
    start: 143020,
    end: 145200 },
  { dialogs: [ '*NBC 뉴스 채널을 구독해 주세요*' ],
    id: '43',
    start: 145200,
    end: 150377 } ];



    var find_sub_index = function(time, sub_container) {
      for(var i=0; i<sub_container.length; i++) {
	//console.log(time);
	if(time >= sub_container[i].start && time <= sub_container[i].end) {
	  console.log('찾음');
	  return i;
	}
      }
      return -1;
    };

    
    var promise;   
    $scope.start = function() {
      promise = $interval(function() {
	$scope.player_time = ($scope.player.getCurrentTime().toFixed(3)*1000);

	if ($scope.sub_type == 1) {
	  var sub_index = find_sub_index($scope.player_time, $scope.sub);
	  
	  if(sub_index == -1) {
	    $scope.is_speak = false;
	    $scope.dialogs = [];
	  } else {
	    $scope.is_speak = true;
	    $scope.dialogs = $scope.sub[sub_index].dialogs;
	  }
	  console.log('sub_type1');
	} else if ($scope.sub_type == 2) {
	  sub_index = find_sub_index($scope.player_time, $scope.ksub);
	  
	  if(sub_index == -1) {
	    $scope.is_speak = false;
	    $scope.dialogs = [];
	  } else {
	    $scope.is_speak = true;
	    $scope.dialogs = $scope.ksub[sub_index].dialogs;
	  }
	  
	  console.log('sub_type2');
	  
	}

      }, 200);

    };

    $scope.stop = function() {
      $interval.cancel(promise);
    };
    
    
    $scope.$on('youtube.player.ready', function ($event, player) {
      $scope.player = player;
      $scope.player_time = ($scope.player.getCurrentTime().toFixed(3)*1000);
      $scope.index = find_sub_index($scope.player_time, $scope.sub);

    });

    $scope.$on('youtube.player.paused', function ($event, player) {

      
    });
    
    
    $scope.$on('youtube.player.ended', function ($event, player) {

    });

    
    $scope.$on('youtube.player.playing', function ($event, player) {
      $scope.start();

     
    });


    $scope.change_sub = function(type) {
      if (type == 1) {
	console.log('영어 변환 버튼 눌림');
	$scope.sub_type = 1;
      } else if (type == 2) {
	console.log('한글 변환 버튼 눌림');
	$scope.sub_type = 2;
      }
    };

  }]);
