import EventEmitter from "EventEmitter2";
import {Map,set_rcs,cq} from "./main";

const brux = Object.assign({},EventEmitter.prototype,{

    feed : {},

    snatchemit(clone){

        this.feed = null;

        this.feed = clone;

        this.emit("snatch");

    },

    on_snatch(demand){

        this.on("snatch",demand);

    },

    off_snatch(demand){

        this.removeListener("snatch",demand);

    },

    supply(){

        return this.feed;

    },

/*--------------------------------------------------------------*/

    Brother : class {

        constructor(rcs){

            this.rcs = set_rcs(rcs);

            this.cq = cq.bind(this);

        }

        init(state){

            this.clone = new Map(Object.entries(state));

        }

        end(){

            brux.snatchemit(this.clone.toObject());

        }

        fin(){

            [this.clone,this.rcs] = [this.clone,this.rcs].map(map=>{

                map.clear();

                return null;

            });

        }

    }

});

export default brux;
