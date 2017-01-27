const gulp = require("gulp");

var js_build, wp_config, devices;

(worker=>{

    js_build = worker.js_build;

    wp_config = worker.wp_config;

    devices = worker.devices;

})(require("../worker"));

devices.forEach(device=>(instance=>{

    gulp.task(`js_${device}`,() => {

        return js_build(instance);

    });

})(wp_config(device)));

gulp.task("js",

    devices.map(device=>`js_${device}`),

    cb=>{if(cb) cb();}

);
