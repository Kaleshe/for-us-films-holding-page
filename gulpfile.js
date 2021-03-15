"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");

sass.compiler = require("node-sass");

gulp.task("sass", () => {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("watch", () => {
  gulp.watch("./sass/", gulp.series("sass"));
});
