import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

import "./styles.css";

function App() {
  const [{ left, top }, set] = useState({
    left: 0,
    top: 0
  });
  const style = useSpring({
    left,
    top,
    to: { left, top },
    from: { left: 0, top: 0 }
  });
  return (
    <div
      className="App"
      onMouseMove={e => {
        set({ left: e.clientX, top: e.clientY });
      }}
    >
      <animated.div className="circle" style={style} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
