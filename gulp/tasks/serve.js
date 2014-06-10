'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	refresh = require('gulp-livereload'),
	liveReloadServer = require('tiny-lr')(),
	express = require('express'),
	liveReload = require('connect-livereload'),
	liveReloadPort = 35728,
	serverPort = 9000,
	server;

// Set up an express server (but not starting it yet)
var server = express();

// Add live reload
server.use(liveReload({port: liveReloadPort}));

// Use our 'build' folder as rootfolder
server.use(express.static('./build'));

// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
	res.sendfile('index.html', { root: 'build' });
});

gulp.task('serve', function() {
	// Start webserver
	server.listen(serverPort);
	// Start live reload
	liveReloadServer.listen(liveReloadPort);

	gulp.src('./build/**')
		.pipe(watch())
		.pipe(refresh(liveReloadServer));
});
