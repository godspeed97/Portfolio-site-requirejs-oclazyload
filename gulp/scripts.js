var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify');

gulp.task('js-main', function () {
    gulp.src('js/app.js')
        //.pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(uglify({ mangle: false }))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('js/assets'))
});

gulp.task('watch:js-main', ['js-main'], function () {
    gulp.watch('js/app.js', ['js-main']);
});