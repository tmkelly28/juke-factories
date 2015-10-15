app.factory('PlayerFactory', function (AlbumFactory, $rootScope) {
	var playerObj = {};
	
	var songs;
	var audio = document.createElement('audio');
	var progress;

	audio.addEventListener('timeupdate', function() {
		progress = 100 * audio.currentTime / audio.duration;
		$rootScope.$digest();
	});

	audio.addEventListener('ended', function () {
		playerObj.next();
	});	

	var playing = false;
	var currentSong;

	playerObj.start = function(song, album, artist) {
		this.pause();
		this.load(song);
		this.resume();
		if (album) songs = album.songs;
		if (artist) songs = artist.songs;
	}

	playerObj.load = function(song) {
		audio.src = song.audioUrl;
		audio.load();
		currentSong = song;
	}

	playerObj.pause = function() {
		audio.pause();
		playing = false;
	}

	playerObj.resume = function() {
		audio.play();
		playing = true;
	}

	playerObj.isPlaying = function() {
		return playing;
	}

	playerObj.getCurrentSong = function() {
		return currentSong;
	}

	playerObj.moveTo = function(index) {
		index += songs.length
		index %= songs.length;
		this.start(songs[index]);
	}

	playerObj.forward = function() {
		var id = currentSong._id;
		var index;
		songs.forEach(function(song, i) {
			if (song._id === id) index = i;
		})
		this.moveTo(index + 1);
	}

	playerObj.back = function() {
		var id = currentSong._id;
		var index;
		songs.forEach(function(song, i) {
			if (song._id === id) index = i;
		})
		this.moveTo(index - 1);
	}

	playerObj.getProgress = function() {
		return progress;
	}

	playerObj.toggle = function () {
		if (playing) this.pause();
		else this.resume();
	}

	return playerObj;
});