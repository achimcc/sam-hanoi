import React from "react";
import "./App.css";
import dispatch from "./sam/dispatch";

function App() {
  const clickHandler = () => dispatch({ type: "START", payload: { tiles: 8 } });

  return (
    <div className="App" id="app">
      <header className="App-header">
        <button onClick={clickHandler}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
