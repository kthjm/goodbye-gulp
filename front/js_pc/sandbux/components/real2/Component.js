import React from "react";

import style from "./style";

import {dynamic_allocator as listener} from "../../mod";

module.exports = props => (

    <div className="real2" style={style.test} onMouseOver={listener}>{props.type}</div>

);
