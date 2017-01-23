import React from "react";
import sandbux from "sandbux";
import mod from "./mod";

import Allocator_1 from "./components/Allocator_1";

module.exports = class Vanilla extends React.Component{

    constructor(props){

        super(props);

        this.state = {};

        this.synced = this.synced.bind(this);

        this.asynced = this.asynced.bind(this);

    }

    componentWillMount(){

        sandbux.onsynced(this.synced);

        sandbux.onasynced(this.asynced);

        mod.init(this.state,mod.after_init.bind(mod));

    }

    componentDidMount(){}

    synced(){

        this.setState(sandbux.feed());

    }

    asynced(){

        this.state = null;

        this.state = sandbux.feed();

    }

    componentWillReceiveProps(nextprops){}

    shouldComponentUpdate(){return true;}

    render(){return(

        <div>

            <Allocator_1 />

        </div>

    )}

    componentDidUpdate(preprops,prestate){

        mod.feedback(prestate,this.state,mod.after_every_update.bind(mod));

    }

    componentWillUnmount(){

        sandbux.offsynced(this.synced);

        sandbux.offasynced(this.asynced);

        mod.annul();

    }

};
