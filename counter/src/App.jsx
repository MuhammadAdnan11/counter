import { useState } from "react";

import "./App.css";

function App() {
  const addCups = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
    }
  };
  const removeCups = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  let [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Cup of Tea☕</h1>
      <h2>Counter Value: {counter}</h2>
      <br />
      <button onClick={addCups}>
        Add Cups☕
        {counter}
      </button>
      <br />
      <br />
      <button onClick={removeCups}>Remove Cups☕{counter}</button>
      <br />
      <br />
      <button onClick={reset}>Reset 🧼</button>
    </>
  );
}

export default App;
