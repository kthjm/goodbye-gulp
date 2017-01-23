const gulp = require("gulp");

gulp.task("www",()=>{

    gulp.src("./front/www/**/*.*").pipe(gulp.dest("./docs"));

});
