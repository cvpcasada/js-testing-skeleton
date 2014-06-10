'use strict';

var gulp = require('gulp');

require('./browserify');

gulp.task('watch', function() {
	gulp.watch('src/sass/**', ['compass']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('src/htdocs/**', ['copy']);
	gulp.start('watchify');
});
