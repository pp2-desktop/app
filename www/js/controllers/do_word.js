angular.module('starter.controllers')
  .controller('doword_ctrl', ['$scope', '$rootScope', '$http', '$stateParams', '$interval', function($scope, $rootScope, $http, $stateParams, $interval) {
    
    $scope.title = 'The Daily Show - Exclusive - Barack Obama Extended Interview';
    $scope.vid = '4zVS7BLbbkk';
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



    $scope.sub = [ { dialogs: [ 'MICKEY: Here\'s Pluto\'s bowl.', 'And his leash.' ],
		     id: '1',
		     start: 4090,
		     end: 6660 },
		   { dialogs: [ 'And a big bag', 'of Pluto\'s favorite treats.' ],
		     id: '2',
		     start: 6660,
		     end: 9930 },
		   { dialogs: [ 'He only gets a treat', 'when he\'s good.' ],
		     id: '3',
		     start: 9930,
		     end: 11830 },
		   { dialogs: [ 'Why that\'s all the time,', 'isn\'t it, Pluto?' ],
		     id: '4',
		     start: 11830,
		     end: 14430 },
		   { dialogs: [ '(GIGGLES)', 'Whoa! Easy with those', 'treats, Minnie.' ],
		     id: '5',
		     start: 14630,
		     end: 17300 },
		   { dialogs: [ 'They\'re very fattening.' ],
		     id: '6',
		     start: 17300,
		     end: 18760 },
		   { dialogs: [ 'Okay, boy,', 'I\'ll see you in a month.' ],
		     id: '7',
		     start: 19160,
		     end: 21060 },
		   { dialogs: [ 'My little Pluto.', 'My little buddy', 'wuddy wo wo!' ],
		     id: '8',
		     start: 21060,
		     end: 23500 },
		   { dialogs: [ '(PANTING HAPPILY)' ],
		     id: '9',
		     start: 23500,
		     end: 24930 },
		   { dialogs: [ 'My little Minnie,', 'my little wo wo!' ],
		     id: '10',
		     start: 24930,
		     end: 27060 },
		   { dialogs: [ 'Take good care of my Pluto!' ],
		     id: '11',
		     start: 28160,
		     end: 29960 },
		   { dialogs: [ 'We\'re going to have so', 'much fun!' ],
		     id: '12',
		     start: 30560,
		     end: 32760 },
		   { dialogs: [ '(WHINING)' ], id: '13', start: 32760, end: 34330 },
		   { dialogs: [ 'Oh, I know I shouldn\'t,', 'but I can\'t help myself!' ],
		     id: '14',
		     start: 34530,
		     end: 37230 },
		   { dialogs: [ '(GIGGLE)', '(CHOMPING)' ],
		     id: '15',
		     start: 37460,
		     end: 38830 },
		   { dialogs: [ '(PHONE RINGING)' ],
		     id: '16',
		     start: 38830,
		     end: 40500 },
		   { dialogs: [ 'Oh, hi Mickey.', 'Pluto\'s fine.' ],
		     id: '17',
		     start: 40790,
		     end: 42930 },
		   { dialogs: [ '(CHUCKLING)', 'No, I didn\'t give him', 'all those treats.' ],
		     id: '18',
		     start: 42930,
		     end: 45530 },
		   { dialogs: 
		     [ 'MICKEY: Oh good.',
		       'Remember, those treats',
		       'are very fattening.' ],
		     id: '19',
		     start: 45530,
		     end: 48460 },
		   { dialogs: [ 'Oh, Minnie.', 'I miss Pluto so much,' ],
		     id: '20',
		     start: 51830,
		     end: 54260 },
		   { dialogs: [ 'I wish I could see him now.' ],
		     id: '21',
		     start: 54460,
		     end: 56300 },
		   { dialogs: 
		     [ 'That\'s it.',
		       'I\'m coming home early.',
		       'I\'ll be over later today.' ],
		     id: '22',
		     start: 56760,
		     end: 59800 },
		   { dialogs: [ 'Don\'t worry, Pluto!', 'I\'ll get you back into shape.' ],
		     id: '23',
		     start: 60400,
		     end: 63030 },
		   { dialogs: [ '(BARK)' ], id: '24', start: 63230, end: 64430 },
		   { dialogs: [ 'A nice slimming sweater', 'is what you need.' ],
		     id: '25',
		     start: 64430,
		     end: 66900 },
		   { dialogs: [ '(STRETCHING)', '(THUNK)' ],
		     id: '26',
		     start: 66900,
		     end: 68060 },
		   { dialogs: [ 'Perfect!', 'Mickey will never', 'know the difference.' ],
		     id: '27',
		     start: 68060,
		     end: 70500 },
		   { dialogs: [ '(DINGS)' ], id: '28', start: 79260, end: 80360 },
		   { dialogs: [ 'A sauna will melt away', 'those lbs.', '(STEAMING)' ],
		     id: '29',
		     start: 80360,
		     end: 82700 },
		   { dialogs: [ 'After all,', 'it worked for me.' ],
		     id: '30',
		     start: 82700,
		     end: 84960 },
		   { dialogs: [ '(DINGS)' ], id: '31', start: 84960, end: 85960 },
		   { dialogs: [ 'Oh!' ], id: '32', start: 87660, end: 88660 },
		   { dialogs: [ '(WHEEZES)' ], id: '33', start: 89560, end: 90600 },
		   { dialogs: [ 'Phew.' ], id: '34', start: 97360, end: 98360 },
		   { dialogs: 
		     [ '(SINGSONG)',
		       'I\'m going to see my Pluto,',
		       'my Pluto, my Pluto.' ],
		     id: '35',
		     start: 98600,
		     end: 102100 },
		   { dialogs: [ 'Come on, Pluto!', 'Let\'s go for a jog.' ],
		     id: '36',
		     start: 103160,
		     end: 105600 },
		   { dialogs: [ 'Nah.' ], id: '37', start: 106030, end: 107030 },
		   { dialogs: [ 'Oh, Mickey\'s going to be', 'so disappointed.' ],
		     id: '38',
		     start: 107260,
		     end: 110000 },
		   { dialogs: [ '(BARKING)' ], id: '39', start: 110860, end: 112260 },
		   { dialogs: [ 'That\'s it!', 'Pluto just needs', 'some motivation.' ],
		     id: '40',
		     start: 112530,
		     end: 115030 },
		   { dialogs: [ 'Yoo-hoo.', 'Pluto.' ],
		     id: '41',
		     start: 115400,
		     end: 116930 },
		   { dialogs: [ 'Special delivery.' ],
		     id: '42',
		     start: 117660,
		     end: 119330 },
		   { dialogs: [ 'Huh?' ], id: '43', start: 119630, end: 120630 },
		   { dialogs: [ '(ALL MEOWING)' ],
		     id: '44',
		     start: 131860,
		     end: 133060 },
		   { dialogs: [ '(SIREN WAILING)' ],
		     id: '45',
		     start: 136930,
		     end: 138230 },
		   { dialogs: [ 'Perfect!' ], id: '46', start: 138230, end: 139400 },
		   { dialogs: [ 'Oh, Pluto!', 'It\'s working!', 'We did it.' ],
		     id: '47',
		     start: 144190,
		     end: 146930 },
		   { dialogs: [ 'Whoa!' ], id: '48', start: 148800, end: 149900 },
		   { dialogs: [ '(ALL BARKING)' ],
		     id: '49',
		     start: 150160,
		     end: 151160 },
		   { dialogs: [ 'Oh, dear.' ], id: '50', start: 151430, end: 152500 },
		   { dialogs: [ 'Oh! Oh!' ], id: '51', start: 152500, end: 153800 },
		   { dialogs: [ 'Whoa!' ], id: '52', start: 154100, end: 155690 },
		   { dialogs: [ 'Pluto!' ], id: '53', start: 157000, end: 158360 },
		   { dialogs: [ '(CAR HORN HONKS)' ],
		     id: '54',
		     start: 168830,
		     end: 169900 },
		   { dialogs: [ '(SHIP HORN BLARING)', '(CAR HORN HONKING)' ],
		     id: '55',
		     start: 176060,
		     end: 178160 },
		   { dialogs: [ 'Oh, Pluto!' ],
		     id: '56',
		     start: 178160,
		     end: 180030 },
		   { dialogs: [ 'Ahhh!' ], id: '57', start: 180030, end: 181130 },
		   { dialogs: [ '(ALL GROWLING)' ],
		     id: '58',
		     start: 182660,
		     end: 183660 },
		   { dialogs: [ 'BOTH: Pluto! Help!' ],
		     id: '59',
		     start: 184560,
		     end: 186130 },
		   { dialogs: [ '(EXPLOSION)', '(DOGS WHIMPERING)' ],
		     id: '60',
		     start: 196360,
		     end: 198330 },
		   { dialogs: [ 'MICKEY:', 'Pluto, you\'re ripped!' ],
		     id: '61',
		     start: 200060,
		     end: 202260 },
		   { dialogs: [ 'Wow, Minnie, he looks great!' ],
		     id: '62',
		     start: 202260,
		     end: 204230 },
		   { dialogs: 
		     [ 'I was pretty sure I was',
		       'going to come home',
		       'to find a big, fat Pluto.' ],
		     id: '63',
		     start: 204230,
		     end: 207430 },
		   { dialogs: [ '(GIGGLING)', '(GROANING)' ],
		     id: '64',
		     start: 207430,
		     end: 209200 } ];



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
	
	var sub_index = find_sub_index($scope.player_time, $scope.sub);
	
	if(sub_index == -1) {
	  $scope.is_speak = false;
	  $scope.dialogs = [];
	} else {
	  $scope.is_speak = true;
	  $scope.dialogs = $scope.sub[sub_index].dialogs;
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
    
    
  }]);
