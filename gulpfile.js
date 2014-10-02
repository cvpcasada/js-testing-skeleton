'use strict';

var gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	cache = require('gulp-cached'),
	jshint = require('gulp-jshint'),
	jshintStylish = require('jshint-stylish');

gulp.task('test', function() {
	return gulp.src(['test/**/*.js'])
		.pipe(mocha({
			ui: 'bdd',
			reporter: 'nyan'
		}));
});

gulp.task('jshint', function() {
	return gulp.src(['src/**/*.js', 'test/**/*.js'])
		.pipe(cache('linting'))
		.pipe(jshint())
		.pipe(jshint.reporter(jshintStylish));
});

gulp.task('watch', function() {
	gulp.watch(['src/**/*.js', 'test/**/*.js'], ['jshint', 'test']);
});

gulp.task('default', ['watch']);
