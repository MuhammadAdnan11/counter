import { useState } from "react";

import "./App.css";

function App() {
  const addCups = () => {
    setCounter(counter + 1);
  };
  const removeCups = () => {
    setCounter(counter - 1);
  };

  let [counter, setCounter] = useState(5);
  return (
    <>
      <h1>Cup of Tea☕</h1>
      <h2>Counter Value: {counter}</h2>
      <br />
      <button onClick={addCups}>Add Cups☕ {counter}</button>
      <br />
      <button onClick={removeCups}>Remove Cups☕{counter}</button>
    </>
  );
}

export default App;
