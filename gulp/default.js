// const gulp = require("gulp");
// const minimist = require("minimist");
// const start_watch_all = ;

require("gulp").task(

    "default",

    (b=>{

        if(typeof b == "string")  return b.split(",");

        else if(b) return ["all"];

    })(
        require("minimist")(process.argv.slice()).b
    ),

    require("./watch")

);

module.exports = {

    src : "./front",

    dest : "./app/public"

};
