const gulp = require("gulp");

const minimist = require("minimist");

gulp.task("clone",()=>((type,number)=>{

    if(!type) type = "pc";

    for(let i = 0; i < number; i++){

        gulp.src(`./gulp/Component/*.*`)
        .pipe(gulp.dest(`./front/js_${type}/sandbux/components/new${i+1}`))

    }

})(...(o=>{

    return [o.t,Number(o.n)];

})(minimist(process.argv.slice()))))
