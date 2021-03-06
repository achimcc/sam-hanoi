import React from "react";
import logo from "./logo.svg";
import "./App.css";
import model from "./sam/model";
import actions from "./sam/actions";

function App() {
  const clickHandler = () => actions.INIT(model.present);

  return (
    <div className="App" id="app">
      <header className="App-header">
        <button onClick={clickHandler}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
