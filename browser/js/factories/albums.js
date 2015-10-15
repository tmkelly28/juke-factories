app.factory('AlbumFactory', function ($http) {
	var albumObj = {};

	albumObj.getAlbum = function (id) {
		// console.log('In getAlbum');
		return $http.get('/api/albums/' + id)
			.then(function (response) {
				// console.log("pretty deep in getAlbum")
				var album = response.data;
				return album;
			}).then(function(album) {
				return prepAlbumData(album);
			});
	};
	albumObj.getAllAlbums = function () {
		return $http.get('/api/albums/')
			.then(function(res) {
				var albums = res.data;
				return albums
			})
			.then(function(albums) {
				return albums.map(prepAlbumData)
			})
	};
	return albumObj;
})

function prepAlbumData(album) {
	album.imageUrl = '/api/albums/' + album._id + '.image';
	var albumArtists = _.indexBy(album.artists, '_id');
	album.songs.forEach(function (s) {
		s.audioUrl = '/api/songs/' + s._id + '.audio';
		s.artists = s.artists.map(function (artistId) {
			return albumArtists[artistId];
		});
	});
	return album;
}