const gulp = require("gulp");

var js_build, wp_config;

(worker=>{

    js_build = worker.js_build;

    wp_config = worker.wp_config;

})(require("../worker"))


gulp.task("js",()=>{

    ["mobile","pc"].forEach(device=>{(instance=>{

        js_build(instance);

    })(wp_config(device))});

});
