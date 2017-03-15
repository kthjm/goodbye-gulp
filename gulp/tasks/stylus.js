const gulp = require("gulp");
const gulp_plumber = require("gulp-plumber");
const gulp_stylus = require("gulp-stylus");
const nib = require("nib");
const gulp_concat = require("gulp-concat");
const gulp_autoprefixer = require("gulp-autoprefixer");
const gulp_if = require("gulp-if");
const gulp_minify = require("gulp-minify-css");

const config = (cfg=>({

    src : `${cfg.src}/stylus/*.*`,

    dest : `${cfg.dest}/css`,

    filename : "main.css",

    autoprefixer : {browsers:["last 2 versions"]},

    minify : false

}))(require("../default"));

gulp.task("stylus",()=>{

    console.log(`will build ${config.src} => ${config.dest}/${config.filename}`);

    gulp.src(config.src)
    .pipe(gulp_plumber())// エラー出ても止まらないようにする
    .pipe(gulp_stylus({use:[nib()]}))// 実際コンパイルしてるのはここ
    .pipe(gulp_concat(config.filename))// 1つのファイルに固める
    .pipe(gulp_autoprefixer(config.autoprefixer))// vendor-prefixつける
    .pipe(gulp_if(config.minify,gulp_minify()))// 必要ならminifyする
    .pipe(gulp.dest(config.dest));// 出力する

});
