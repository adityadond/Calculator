import React from "react";
import './button.css'

function button(props) {
  return <input type="button" value={props.label} onClick = {props.handleClick} />;
}

export default button;
