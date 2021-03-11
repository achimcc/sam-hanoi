import React from "react";
import "./App.css";
import dispatch from "./sam/dispatch";

function App() {
  const clickHandler = () => dispatch({ type: "INIT" });

  return (
    <div className="App">
      <header className="App-header" id="app">
        <button onClick={clickHandler}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
