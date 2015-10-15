app.controller('ArtistBrowsingCtrl', function($scope, $rootScope, ArtistFactory) {
	ArtistFactory.getAllArtists()
		.then(function(artists) {
			$scope.artists = artists;
		})

	$scope.viewOneArtist = function (id) {
		$rootScope.$broadcast('viewChange', {mode: 'singleArtist', id: id});
	}

	$scope.$on('viewChange', function(evt, data) {
		if (data.mode ==='artists') $scope.showArtists = true;
		else $scope.showArtists = false;
	})
})