var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

gulp.task('scss-main', function () {
    return gulp.src('css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/public'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scss-calc', function () {
    return gulp.src('portfolio/calculator/css/master.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('portfolio/calculator/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scss-sudoku', function () {
    return gulp.src('portfolio/sudoku/css/master.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('portfolio/sudoku/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scss-petstore', function () {
    return gulp.src('portfolio/petstore/css/master.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('portfolio/petstore/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scss-nhlstats', function () {
    return gulp.src('portfolio/nhlstats/css/master.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('portfolio/nhlstats/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch:scss-main', ['scss-main'], function () {
    gulp.watch('css/**/*.scss', ['scss-main']);
});

gulp.task('watch:scss-calc', ['scss-calc'], function () {
    gulp.watch('portfolio/calculator/css/master.scss', ['scss-calc']);
});

gulp.task('watch:scss-sudoku', ['scss-sudoku'], function () {
    gulp.watch('portfolio/sudoku/css/master.scss', ['scss-sudoku']);
});

gulp.task('watch:scss-petstore', ['scss-petstore'], function () {
    gulp.watch('portfolio/petstore/css/master.scss', ['scss-petstore']);
});

gulp.task('watch:scss-nhlstats', ['scss-nhlstats'], function () {
    gulp.watch('portfolio/nhlstats/css/master.scss', ['scss-nhlstats']);
});