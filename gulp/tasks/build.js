const gulp = require("gulp");
const runSequence = require("run-sequence");

gulp.task("build", callback => {
  runSequence(
    "clean",
    "svgstore",
    "font-icon",
    ["styles", "templates", "images", "rootfiles", "fonts", "scripts"],
    callback
  );
});
