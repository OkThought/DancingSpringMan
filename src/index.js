import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [name, setName] = useState("John");
  return (
    <div className="App">
      <input onChange={({ value }) => setName(value)} value={name} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
