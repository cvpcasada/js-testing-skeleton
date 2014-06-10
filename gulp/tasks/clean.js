'use strict';

var gulp = require('gulp'),
	rimraf = require('rimraf');

require('./build');

gulp.task('clean', function() {
	rimraf('dist', function() {
		gulp.start('build');
	});
});
