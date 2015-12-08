var gulp = require("gulp"),
    fs = require("fs"),
    browserSync = require("browser-sync");

fs.readdirSync(__dirname + "/gulp").forEach(function (task) {
    require("./gulp/" + task)
});

gulp.task("browserSync", function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
});

gulp.task("build", ["scss-main", "js-main"]);
gulp.task("watch", ["watch:scss-main", "watch:js-main"]);
gulp.task("dev", ["watch", "dev:server", "browserSync"]);