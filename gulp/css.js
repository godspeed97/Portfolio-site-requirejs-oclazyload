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
        .pipe(gulp.dest('css/assets'))
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
        .pipe(gulp.dest('portfolio/calculator/css'))
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
        .pipe(gulp.dest('portfolio/nhlstats/css'))
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

gulp.task('watch:scss-nhlstats', ['scss-nhlstats'], function () {
    gulp.watch('portfolio/nhlstats/css/master.scss', ['scss-nhlstats']);
});