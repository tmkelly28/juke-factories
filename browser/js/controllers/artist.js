app.controller('ArtistCtrl', function($scope, $rootScope, ArtistFactory, PlayerFactory) {
	$scope.$on('viewChange', function(evt, data) {
		if (data.mode === 'singleArtist') {
			ArtistFactory.getSingleArtist(data.id)
				.then(function(artist) {
					console.log(artist);
					$scope.artist = artist;
					$scope.showSingleArtist = true;
				});
		} else {
			$scope.showSingleArtist = false;
		}
	})

	$scope.start = function(song, artist) {
		PlayerFactory.start.call(PlayerFactory, song, null, artist);	
	}

	$scope.showOneAlbum = function(id) {
		$rootScope.$broadcast('viewChange', {mode: 'singleAlbum', id: id})
	}

	$scope.currentSong = PlayerFactory.getCurrentSong;
})