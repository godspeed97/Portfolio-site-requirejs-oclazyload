var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify');

gulp.task('js-main', function () {
    return gulp.src(['js/app.js', 'js/modules/controllersModule.js', 'js/controllers/contactFormController.js'])
        //.pipe(sourcemaps.init())
        .pipe(concat('mainApp.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('js/public'))
});

gulp.task('js-calc', function () {
    return gulp.src(['!portfolio/calculator/js/mainModuleDev.js', 'portfolio/calculator/js/mainModule.js', 'portfolio/calculator/js/**/*.js'])
        //.pipe(sourcemaps.init())
        .pipe(concat('mainModule.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('portfolio/calculator/public/js'))
});

gulp.task('js-sudoku', function () {
    return gulp.src(['!portfolio/sudoku/js/mainModuleDev.js', 'portfolio/sudoku/js/mainModule.js', 'portfolio/sudoku/js/**/*.js', 'portfolio/sudoku/puzzles/**/*.js'])
        //.pipe(sourcemaps.init())
        .pipe(concat('mainModule.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('portfolio/sudoku/public/js'))
});

gulp.task('js-petstore', function () {
    return gulp.src(['!portfolio/petstore/js/mainModuleDev.js', '!portfolio/petstore/js/adminRouting.js', 'portfolio/petstore/js/mainModule.js', 'portfolio/petstore/controllers/main/**/*.js', 'portfolio/petstore/components/**/*.js', 'portfolio/petstore/filters/**/*.js'])
        //.pipe(sourcemaps.init())
        .pipe(concat('mainModule.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('portfolio/petstore/public/js'))
});

gulp.task('js-nhlstats', function () {
    return gulp.src(['!portfolio/nhlstats/js/mainModuleDev.js', 'portfolio/nhlstats/js/mainModule.js', 'portfolio/nhlstats/js/**/*.js'])
        //.pipe(sourcemaps.init())
        .pipe(concat('mainModule.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('portfolio/nhlstats/public/js'))
});

gulp.task('watch:js-main', ['js-main'], function () {
    gulp.watch('js/**/*.js', ['js-main']);
});

gulp.task('watch:js-calc', ['js-calc'], function () {
    gulp.watch('portfolio/calculator/js/**/*.js', ['js-calc']);
});

gulp.task('watch:js-sudoku', ['js-sudoku'], function () {
    gulp.watch('portfolio/sudoku/js/**/*.js', ['js-sudoku']);
});

gulp.task('watch:js-petstore', ['js-petstore'], function () {
    gulp.watch('portfolio/petstore/js/**/*.js', ['js-petstore']);
});

gulp.task('watch:js-nhlstats', ['js-nhlstats'], function () {
    gulp.watch('portfolio/nhlstats/js/**/*.js', ['js-nhlstats']);
});