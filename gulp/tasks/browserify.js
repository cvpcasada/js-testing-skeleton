'use strict';

/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead of browserify for faster bundling using caching.
*/

var browserify = require('browserify'),
	watchify = require('watchify'),
	gulp = require('gulp'),
	bundleLogger = require('../util/bundleLogger'),
	handleErrors = require('../util/handleErrors'),
	source = require('vinyl-source-stream'),

	methodConfig = {
		// Entry point(s) to the app
		entries: ['./src/javascript/app.js'],
		// Add file extentions to make optional in your requires
		extensions: ['.hbs']
	},

	bundle = function(bundler) {

		bundleLogger.start();

		bundler.transform({global: true}, require('hbsfy'));

		return bundler
			// Enable source maps
			.bundle({debug: true})

			// Report compile errors
			.on('error', handleErrors)

			// Use vinyl-source-stream to make the stream gulp compatible. Specifiy the desired output filename here.
			.pipe(source('app.js'))

			// Output destination
			.pipe(gulp.dest('./build/'))

			// Log when bundling completes
			.on('end', bundleLogger.end);
	};

gulp.task('browserify', function() {

	var bundler = browserify(methodConfig);
	return bundle(bundler);
});

gulp.task('watchify', function() {

	var bundler = watchify(methodConfig);

	// Rebundle with watchify on changes.
	bundler.on('update', function() {
		bundle(bundler);
	});

	return bundle(bundler);
});
