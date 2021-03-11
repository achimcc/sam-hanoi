import React from "react";
import styled from "styled-components";
import dispatch from "../../sam/dispatch";
import Select from "./Select";

const WelcomeDiv = styled.div`
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const Init = () => {
  const towers: Array<TowerType> = ["LEFT", "MIDDLE", "RIGHT"];
  const start = () => dispatch({ type: "START" });
  const changeHandler = (nrTiles: number) =>
    dispatch({ type: "TILES", payload: { nrTiles } });
  return (
    <WelcomeDiv>
      Welcome
      <div>
        <Select onChange={changeHandler}></Select>
      </div>
      <div>
        <button onClick={start}>Start!</button>
      </div>
    </WelcomeDiv>
  );
};

export default Init;
