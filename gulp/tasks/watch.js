'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {

	//TODO Refactor appropriate methods to use gulp-watch streaming watch instead of built in watch
	gulp.watch('src/javascript/**', ['jshint']);
	gulp.start('watchify');
	gulp.watch('src/sass/**', ['compass']);
	gulp.watch('src/sass/**', ['compass']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('src/htdocs/**', ['html']);
	gulp.start('serve');
});
