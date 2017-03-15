import React from "react";

import style from "./style";

import {dynamic_allocator as listener} from "../../mod";

module.exports = props => (

    <div id="real1" style={style.test} onClick={listener}>1</div>

);
