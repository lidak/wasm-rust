import React, {useState} from 'react';
import { createRoot } from "react-dom/client";

const wasm = import("../build/webassembly");


wasm.then((m) => {
  const App = () => {
    const [name, setName] = useState("");
    const handleChange = (e) => {
      setName(e.target.value);
    };
    const handleClick = () => {
      m.welcome(name);
    };

    return (
      <>
        <div>
          <h1>Hi there</h1>
          <button onClick={m.big_computation}>Run Computation</button>
        </div>
        <div>
          <input type="text" onChange={handleChange} />
          <button onClick={handleClick}>Say hello!</button>
        </div>
      </>
    );
  };

  const container = createRoot(document.getElementById("app"))
  container.render(<App />);
});