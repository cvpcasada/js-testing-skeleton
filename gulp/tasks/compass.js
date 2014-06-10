'use strict';

var compass = require('gulp-compass'),
	gulp = require('gulp'),
	handleErrors = require('../util/handleErrors');

require('gulp-notify');

gulp.task('compass', function() {
	return gulp.src('./src/sass/*.sass')
		.pipe(compass({
			config_file: 'compass.rb',
			css: 'build',
			sass: 'src/sass'
		}))
		.on('error', handleErrors);
});
