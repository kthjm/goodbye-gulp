import React from "react";

import style from "./style";

// import {dynamic_allocator as listener} from "../../brother";

import {cq} from "../../brother";

module.exports = props => (

    <div className="real2" style={style.test} onMouseOver={cq}>{props.type}</div>

);
