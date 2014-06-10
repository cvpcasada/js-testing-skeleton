'use strict';

var gulp = require('gulp');

gulp.task('html', function() {
	return gulp.src('src/htdocs/**')
		.pipe(gulp.dest('build'));
});
