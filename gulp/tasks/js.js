const gulp = require("gulp");

var js_build, wp_config;

(worker=>{

    js_build = worker.js_build;

    wp_config = worker.wp_config;

})(require("../worker"));

["mobile","pc"].forEach(device=>{(instance=>{

    gulp.task(`js_${device}`,() => {

        return js_build(instance);

    });

})(wp_config(device))});


gulp.task("js",["js_mobile","js_pc"],cb=>{

    if(cb) cb();

});
