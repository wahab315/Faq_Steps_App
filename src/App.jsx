import { useState } from "react";
import StepMessage from "./components/StepMessage";
import Steps from "./components/Steps";
import { messages } from "./data";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setShow(!show)}>
        &times;
      </button>

      {show ? (
        <Steps data={messages} />
      ) : (
        <>
          <StepMessage step={1}>
            <p>Pass in content</p>
            <p>✌️</p>
          </StepMessage>
          <StepMessage step={2}>
            <p>Read children prop</p>
            <p>😎</p>
          </StepMessage>{" "}
        </>
      )}
    </>
  );
}

export default App;
