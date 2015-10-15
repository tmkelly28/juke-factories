app.controller('PlayerCtrl', function ($scope, $rootScope, PlayerFactory, $timeout) {

	$scope.back = PlayerFactory.back.bind(PlayerFactory);
	$scope.toggle = PlayerFactory.toggle.bind(PlayerFactory);
	$scope.forward = function() {
		PlayerFactory.forward.call(PlayerFactory);	
	}
	$scope.isPlaying = PlayerFactory.isPlaying;
	$scope.currentSong = PlayerFactory.getCurrentSong;
	$scope.progress = PlayerFactory.getProgress;
});