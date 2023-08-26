import React from "react";

const StepMessage = (props) => {
  return (
    <>
      <div className="message">
        <h3>Step {props.step}</h3>
        {props.children}
      </div>
    </>
  );
};

export default StepMessage;
