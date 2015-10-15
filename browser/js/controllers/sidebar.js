app.controller('SidebarCtrl', function($scope, $rootScope) {
	$scope.showingAllAlbums = true;

	$scope.viewAlbums = function () {
		$scope.showingAllAlbums = true;
		$scope.showingArtists = false;
		$rootScope.$broadcast('viewChange', {mode: 'albums'})
	} 

	$scope.viewAllArtists = function() {
		$scope.showingAllAlbums = false;
		$scope.showingArtists = true;
		$rootScope.$broadcast('viewChange', {mode: 'artists'})
	}

});