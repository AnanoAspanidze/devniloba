"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp
    .src("./scss/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch("./scss/styles.scss", gulp.parallel("buildStyles"));
};
