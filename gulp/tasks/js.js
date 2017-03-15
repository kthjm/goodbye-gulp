const gulp = require("gulp");
const gulp_webpack = require("webpack-stream");
const webpack = require("webpack");
const gulp_plumber = require("gulp-plumber");
// const gulp_if = require("gulp-if");
// const gulp_uglify = require("gulp-uglify");
const config = require("../default");

gulp.task(

    "js_build",

    ()=>{

        return gulp.src(wp_config.entry)
        .pipe(gulp_plumber())
        .pipe(gulp_webpack(wp_config))
        .pipe(gulp.dest(`${config.dest}/js`));

    }

);

gulp.task(

    "js",

    ["js_build"],

    cb=>cb()

);

const wp_config = {

    entry : `${config.src}/js/index.js`,

    output : {filename:`bundle.js`},

    module : {loaders:[{

        test:/\.jsx?$/,

        exclude:/node_modules/,

        loader:"babel-loader",

        query:{

            presets:["es2015","react"],

            plugins:[
                // "transform-regenerator",
                // "transform-runtime",
                "add-module-exports"
            ]

        }

    }]},

    plugins : [
        new webpack.DefinePlugin({"process.env":{NODE_ENV:JSON.stringify("production")}}),
        // new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}})
    ],

    resolve : {extensions:["",".js",".jsx"],moduleDirectories:["node_modules"]},

    devtool : "source-map",

};



// var js_build, wp_config, devices;
//
// (worker=>{
//
//     js_build = worker.js_build;
//
//     wp_config = worker.wp_config;
//
//     devices = worker.devices;
//
// })(require("../worker"));

// devices.forEach(device=>(instance=>{
//
//     gulp.task(`js_${device}`,() => {
//
//         return js_build(instance);
//
//     });
//
// })(wp_config(device)));

// gulp.task("js",
//
//     devices.map(device=>`js_${device}`),
//
//     cb=>{if(cb) cb();}
//
// );

// const js_build = instance => {
//
//     console.log(`will build ${instance.entry} => ${instance.output.filename}`);
//
//     return gulp.src(instance.entry)
//     .pipe(gulp_plumber())
//     .pipe(gulp_webpack(instance))
//     .pipe(gulp_if(instance.uglify,gulp_uglify()))
//     .pipe(gulp.dest("./docs/js"));
//
// };

// const wp_config = device => ({
//
//     entry : "./front/js_"+device+"/index.js",
//
//     output : {filename:`generated_for_${device}.js`},
//
//     module : {loaders:[{
//
//         test:/\.jsx?$/,
//
//         exclude:/node_modules/,
//
//         loader:"babel-loader",
//
//         query:{presets:["es2015","react"]}
//
//     }]},
//
//     plugins : [
//         new webpack.DefinePlugin({"process.env":{NODE_ENV:JSON.stringify("production")}}),
//         new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}})
//     ],
//
//     resolve : {extensions:["",".js",".jsx"],moduleDirectories:["node_modules"]},
//
//     //uglify : true,
//
//     devtool : "source-map",
//
// });
