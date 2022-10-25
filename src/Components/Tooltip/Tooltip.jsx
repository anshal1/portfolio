import React from "react";
import { useContext } from "react";
import Context from "../../Context/Context";
import "./Tooltip.css";
const Tooltip = (props) => {
    const c = useContext(Context);
    const {Hover} = c
  return(
    <>
    <div className={Hover}>
        <p id="tooltip">{props.text}</p>
    </div>
    </>
  )
};

export default Tooltip;
