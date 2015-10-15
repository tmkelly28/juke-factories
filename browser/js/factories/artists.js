app.factory('ArtistFactory', function($http) {
	var artistObj = {};
	var artist;

	artistObj.getAllArtists = function () {
		return $http.get('/api/artists/')
			.then(function(res) {
				var artists = res.data;
				return artists
			})
	}

	artistObj.getSingleArtist = function (id) {
		return $http.get('/api/artists/' + id)
			.then(function (res) {
				artist = res.data;
				return artist;
			})
			.then(function(artist) {
				return $http.get('/api/artists/' + artist._id + '/albums/')
			})
			.then(function(res) {
				var albums = res.data;
				albums.forEach(function(album) {
					album.imageUrl = '/api/albums/' + album._id + '.image';
				})
				artist.albums = albums;
			})
			.then(function() {
				return $http.get('/api/artists/' + artist._id + '/songs/')
			})
			.then(function(res) {
				var songs = res.data;
				songs.forEach(function(song) {
					song.audioUrl = '/api/songs/' + song._id + '.audio';
				})
				artist.songs = songs;
				return artist;
			})
	}

	return artistObj;
});