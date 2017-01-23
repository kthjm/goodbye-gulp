import React from "react";

import Real1 from "./real1/component";
import Real2 from "./real2/component";

module.exports = props => (

    <div>

            <Real1 />

        {["aha","eureka"].map(a=>(

            <Real2 type={a} />

        ))}

    </div>

);
