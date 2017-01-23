const gulp = require("gulp");

const start_watch_all = require("../worker").start_watch_all;

gulp.task("default",(b=>{

    if(typeof b == "string")  return b.split(",");

    else if(b) return ["all"];

})(require("minimist")(process.argv.slice()).b),()=>{start_watch_all();});
