var gulp = require('gulp'),
    fs = require('fs'),
    browserSync = require('browser-sync');

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
    require('./gulp/' + task)
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});

gulp.task('build-scss', ['scss-main', 'scss-calc', 'scss-sudoku', 'scss-petstore', 'scss-nhlstats']);
gulp.task('build-js', ['js-main', 'js-calc', 'js-sudoku', 'js-petstore', 'js-nhlstats']);
gulp.task('watch-scss', ['watch:scss-main', 'watch:scss-calc', 'watch:scss-sudoku', 'watch:scss-petstore', 'watch:scss-nhlstats']);
gulp.task('watch-js', ['watch:js-main', 'watch:js-calc', 'watch:js-sudoku', 'watch:js-petstore', 'watch:js-nhlstats']);
gulp.task('dev', ['watch-scss', 'watch-js', 'dev:server', 'browserSync']);