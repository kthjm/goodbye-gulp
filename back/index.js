const express = require("express");

(instance=>{

    instance.use(express.static("./docs"));

    return instance;

})(express()).listen(process.env.PORT || 3000);
