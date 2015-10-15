app.controller('AlbumCtrl', function ($scope, $http, $rootScope, StatsFactory, PlayerFactory, AlbumFactory) {


	$scope.showSingleAlbum = false;
	
	$scope.$on('viewChange', function(evt, data) {
		if (data.mode ==='singleAlbum') {
			AlbumFactory.getAlbum(data.id)
			.then(function(album) {
				$scope.album = album;
				$scope.showSingleAlbum = true;
				return album
			})
			.then(function(album) {
				return StatsFactory.totalTime(album);
			})
			.then(function(time) {
				$scope.albumTime = StatsFactory.parseTime(time);
			});
		} else {
			$scope.showSingleAlbum = false;
		}
	});
		

	$scope.start = function(song, album) {
		PlayerFactory.start.call(PlayerFactory, song, album);	
	}

	$scope.currentSong = PlayerFactory.getCurrentSong;
	
});