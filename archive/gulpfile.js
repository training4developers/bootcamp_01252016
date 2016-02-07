'use strict';

const
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	sassFiles = './assets/sass/**/*.scss';

gulp.task('sass', function () {
  gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./demos/css/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(sassFiles, ['sass']);
});
