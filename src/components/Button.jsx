import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        style={{ backgroundColor: props.bgColor, color: props.textColor }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
