const express = require("express");
const public = require("path").resolve(__dirname,"public");
const fs = require("fs");

(instance=>{

    instance.use(express.static(public));

    instance.use("/:any",(req,res)=>{

        fs.createReadStream(`${public}/index.html`).pipe(res);

    });

    return instance;

})(express()).listen(process.env.PORT || 3000);
