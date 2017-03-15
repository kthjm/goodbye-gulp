const gulp = require("gulp");
const config = require("../default");

gulp.task("www",()=>{

    gulp.src(`${config.src}/www/**/*.*`).pipe(gulp.dest(config.dest));

    // gulp.src("./front/www/**/*.*").pipe(gulp.dest("./docs"));

});
