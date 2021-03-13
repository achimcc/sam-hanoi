import React from "react";
import styled from "styled-components";
import dispatch from "../../sam/Actions/dispatch";
import Select from "./Select";

const WelcomeDiv = styled.div`
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Init = () => {
  const start = () => dispatch({ type: "START" });
  const changeHandler = (nrTiles: number) =>
    dispatch({ type: "TILES", payload: { nrTiles } });
  return (
    <WelcomeDiv>
      <div>Welcome!</div>
      <div>
        Please select the number of Tiles: &nbsp;
        <Select onChange={changeHandler}></Select>
      </div>
      <div>
        <button onClick={start}>Start!</button>
      </div>
    </WelcomeDiv>
  );
};

export default Init;
