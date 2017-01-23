import {Mod} from "sandbux";

import dynamic_allocator from "./dynamic_allocator";

const mod = new Mod({

    after_init(){},

    after_every_update(){},

    knock(){},

    hispatcher(){}

});

mod.dynamic_allocator = dynamic_allocator.bind(mod);

window.addEventListener("resize",mod.dynamic_allocator);

window.addEventListener("keydown",mod.dynamic_allocator);

module.exports = mod;
