'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.start('watchify');
	gulp.watch('src/sass/**', ['compass']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('src/htdocs/**', ['html']);
	gulp.start('serve');
});
