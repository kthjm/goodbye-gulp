const gulp = require("gulp");
const gulp_watch = require("gulp-watch");
const brync = require("browser-sync").create("brync");
const nodemon = require("nodemon");
const webpack = require("webpack");
const gulp_webpack = require("webpack-stream");
const gulp_plumber = require("gulp-plumber");
const gulp_if = require("gulp-if");
const gulp_uglify = require("gulp-uglify");

const start_watch_all = err => {

    console.log("let's watch!!");

    ["js","stylus","www"].forEach(type=>{switch (type) {

        case "js": return ["mobile","pc"].forEach(device=>{(instance=>{

            gulp_watch(`./front/${type}_${device}`,()=>{js_build(instance)});

        })(wp_config(device))});

        default:return gulp_watch(`./front/${type}`,()=>{gulp.start(type,()=>{});})

    }});

    brync.init(null,{

        proxy:"http://localhost:3000/",

        files:"./docs/**/*.*",

        port:7000,

        //browser:["chrome","firefox","microsoft-edge:http://localhost:7000"]

    });

    nodemon({

        script : "./back/index",

        verbose : true,
        //ignore : ["docs","node_modules","front","gulp"],

        //ignore : ["!(back)"],

        watch : ["./back"],

        ext : "js"

    }).on("restart",files=>{brync.reload();});

};


const js_build = instance => {

    console.log(`will build ${instance.entry} => ${instance.output.filename}`);

    return gulp.src(instance.entry)
    .pipe(gulp_plumber())
    .pipe(gulp_webpack(instance))
    .pipe(gulp_if(instance.uglify,gulp_uglify()))
    .pipe(gulp.dest("./docs/js"));

};

const wp_config = device => ({

    entry : "./front/js_"+device+"/index.js",

    output : {filename:`generated_for_${device}.js`},

    module : {loaders:[{

        test:/\.jsx?$/,

        exclude:/node_modules/,

        loader:"babel-loader",

        query:{presets:["es2015","react"],}

    }]},

    plugins : [
        new webpack.DefinePlugin({"process.env":{NODE_ENV:JSON.stringify("production")}}),
        new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}})
    ],

    resolve : {extensions:["",".js",".jsx"],moduleDirectories:["node_modules"]},

    //uglify : true,

    devtool : "source-map",

});

module.exports = {

    start_watch_all : start_watch_all,

    wp_config : wp_config,

    js_build : js_build

}
//plugins:(()=>{switch (device) {case "4s":return ['transform-object-assign'];default:return [];}})()
/*

*/
