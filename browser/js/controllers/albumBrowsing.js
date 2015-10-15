app.controller('AlbumBrowsingCtrl', function($scope, $rootScope, AlbumFactory) {
	AlbumFactory.getAllAlbums()
		.then(function(albums) {
			$scope.albums = albums;
		})


	$scope.$on('viewChange', function(evt, data) {
		if (data.mode ==='albums') $scope.showAlbums = true;
		else $scope.showAlbums = false;
	})

	$scope.showAlbums = true;

	$scope.showOneAlbum = function(id) {
		$rootScope.$broadcast('viewChange', {mode: 'singleAlbum', id: id})
	}
})