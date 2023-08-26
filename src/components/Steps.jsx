import React, { useState } from "react";
import Button from "./Button";
const Steps = (props) => {
  const [num, setNum] = useState(props.data);
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={count >= 1 && "active"}>1</div>
          <div className={count >= 2 && "active"}>2</div>
          <div className={count == 3 && "active"}>3</div>
        </div>

        <p className="message">
          Step {count}
          <br />
          {props.data[count - 1]}
          <div className="buttons">
            <Button
              bgColor="#e7e7e7"
              textColor="#333"
              onClick={() => alert(`Learn how to`)}
            >
              Learn how
            </Button>
          </div>
        </p>

        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            id={count === 1 ? "disable" : ""}
            onClick={() => {
              setCount(count - 1);
            }}
            disabled={count === 1 ? true : false}
          >
            <span>👈</span> Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            id={count >= 3 ? "disable" : ""}
            onClick={() => {
              setCount(count + 1);
            }}
            disabled={count >= 3 ? true : false}
          >
            Next <span>👉</span>
            <span>🤓</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Steps;
