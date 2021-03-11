import dispatch from "./sam/dispatch";
import styled from "styled-components";
import { useEffect } from "react";

const AppDiv = styled.div`
  background-color: #282c34;
  position: fixed;
  text-align: center;
  width: 50vw;
  height: 50vh;
  left: 50%;
  top: 50%;
  margin-top: -25vh;
  margin-left: -25vw;
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
