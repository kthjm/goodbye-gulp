import React from "react";
import brux from "brux";
import brother from "./brother";

import Allocator_1 from "./components/Allocator_1";

module.exports = class Root extends React.Component{

    demand(){

        this.setState(brux.supply());

    }

    constructor(props){

        super(props);

        this.state = {

            kthjm : {
                age : 25,
                sex : "male",
                money : []
            },

            momo : {
                age : 29,
                sex : "female"
            },

            people : []

        };

        this.demand = this.demand.bind(this);

        document.body.style.height = "10000px";

    }

    componentWillMount(){

        brux.on_snatch(this.demand);

        brother.init(this.state);

    }

    componentDidMount(){

        brother.cq({type:"didmount",name:"sex"});

    }

    componentWillUnmount(){

        brux.off_snatch(this.demand);

        brother.fin();

    }

    componentWillReceiveProps(nextprops){}

    shouldComponentUpdate(nextprops, nextstate){return true;}

    componentWillUpdate(nextprops,nextstate){}

    render(){return(

        <div><Allocator_1 /></div>

    )}

    componentDidUpdate(preprops,prestate){

        if(prestate.kthjm.money.length == this.state.kthjm.money.length) console.log("same");

        else console.log("diff");

        brother.cq({type:"didupdate",name:"family"});

    }


};
