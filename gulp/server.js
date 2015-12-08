var gulp = require("gulp"),
    nodemon = require("gulp-nodemon");

gulp.task("dev:server", function () {
    nodemon({
        script: "web-server.js",
        ext: "js"
    });
});