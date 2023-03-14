import React, {useContext} from "react";
import {CalcContext} from "../context/CalcContext";
import {Textfit} from 'react-textfit';

const Screen = () => {
    const {calc} = useContext(CalcContext);


    return (
        <Textfit className={"screen"} mode="single" max={50}>{calc.num ? calc.num : calc.res}</Textfit>
    )


}

export default Screen;