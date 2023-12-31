import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`btn ${classes["custom-btn"]} ${props.className}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
