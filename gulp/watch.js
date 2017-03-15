
module.exports = err => {

    gulpWatch(["js","stylus","www"]);

    nodemonWatch({
        script : "./app/index",
        // verbose : true,
        watch : ["./app"],
        ext : "js html css"
    });

};

const gulpWatch = dirs => ((gulp,watch)=>{

    dirs.forEach(type=>watch(`./front/${type}`,()=>gulp.start(type)));

})(
    require("gulp"),
    require("gulp-watch")
);

const nodemonWatch = options => (

    (nodemon,bync)=>{
        nodemon.on("log",log=>console.log(log.colour));
        nodemon.on("restart",files=>bync.reload());
    }

)(
    require("nodemon")(options),

    require("browser-sync")
    .init({
        proxy:"http://localhost:3000/",
        port:7000
    })
);















// brync.init({proxy:"http://localhost:3000/",port:7000});

// demon.on("start",()=>{
//     console.log("nodemon,start");
// });

// [
//     // "crach",
//     // "exit",
//     // "config",
//     // "log",
//     // "stdout",
//     // "stderr"
//
// ].forEach(
//
//     type=>demon.on(
//
//         type,
//
//         ()=>console.log(type,Array.from(arguments).length)
//
//     )
//
// );
// ignore : (path=>{
//
//     let cwd = process.cwd();
//
//     return ["node_modules","front","gulp"].map(dir=>path.resolve(cwd,dir));
//
// })(require("path")),
//ignore : ["!(app)"],
// .on("restart",files=>{
//     console.log("restart");
//     brync.reload();
// }).on("quit",()=>{
//     console.log("quit");
//     brync.exit();
// });
//
// brync.init(null,{
//
//     proxy:"http://localhost:3000/",
//     // files:"./app/**/**/*.*",
//     // files:"./app/public/**/*.*",
//     port:7000,
//     //browser:["chrome","firefox","microsoft-edge:http://localhost:7000"]
//
// });
// module.exports = {
//
//     start_watch_all : start_watch_all,
//
//     // wp_config : wp_config,
//
//     // js_build : js_build,
//
//     // devices : devices
//
// }
//plugins:(()=>{switch (device) {case "4s":return ['transform-object-assign'];default:return [];}})()
/*

*/
// const devices = [
//     //"mobile",
//     "pc"
// ];
// ["js","stylus","www"].forEach(type=>{switch (type) {
//
//     case "js": return devices.forEach(device=>{(instance=>{
//
//         gulp_watch(`./front/${type}_${device}`,()=>{js_build(instance)});
//
//     })(wp_config(device))});
//
//     default:return gulp_watch(`./front/${type}`,()=>{gulp.start(type,()=>{});})
//
// }});
