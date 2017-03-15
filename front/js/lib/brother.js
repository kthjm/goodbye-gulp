// import {Brother} from "./brux/brux";
import {Brother} from "brux";
const rcs = ["_dom","_window","_react","_path","_other"].map(type=>require(`./rcs/${type}`));
const windows = ["scroll","keydown","popstate"];

module.exports = (br=>{

    windows.forEach(type=>window.addEventListener(type,br.cq));

    console.log(br);

    return br;

})(new Brother(rcs));







// const br = new Brother(cqrc);


// module.exports = br;








// export default br;

// import dynamic_allocator from "./dynamic_allocator";

// const br = new Brother({
//
//     after_init(){},
//
//     after_every_update(){},
//
//     knock(){},
//
//     hispatcher(){}
//
// });
// br.dynamic_allocator = dynamic_allocator.bind(br);
//
// // console.log(br.on);
//
// window.addEventListener("resize",br.dynamic_allocator);
//
// window.addEventListener("keydown",br.dynamic_allocator);
