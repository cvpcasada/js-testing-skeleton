'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jshintStylish = require('jshint-stylish');

gulp.task('jshint', function() {
	return gulp.src('src/javascript/**')
		.pipe(jshint())
		.pipe(jshint.reporter(jshintStylish));
});
