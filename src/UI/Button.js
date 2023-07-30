import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={`btn ${classes["custom-btn"]} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
