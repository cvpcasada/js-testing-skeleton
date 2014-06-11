var gulp = require('gulp');

gulp.task('build', ['jshint', 'browserify', 'compass', 'images', 'html']);
