import dispatch from "./sam/Actions/dispatch";
import styled from "styled-components";
import { useEffect } from "react";

const AppDiv = styled.div`
  background-color: #282c34;
  position: fixed;
  text-align: center;
  width: 90vw;
  height: 90vh;
  left: 10%;
  top: 10%;
  margin-top: -5vh;
  margin-left: -5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  useEffect(() => dispatch({ type: "INIT" }));

  return <AppDiv id="app" />;
}

export default App;
