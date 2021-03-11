import React from "react";
import styled from "styled-components";
import dispatch from "../../sam/dispatch";

const WelcomeDiv = styled.div`
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

interface Props {
  onChange: (nrTiles: number) => void;
}

const Select = ({ onChange }: Props) => {
  const towers: Array<TowerType> = ["LEFT", "MIDDLE", "RIGHT"];
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nrTiles = parseInt(e.target.value);
    onChange(nrTiles);
  };
  return (
    <select onChange={changeHandler} id="cars">
      {Array.from(Array(10).keys()).map((nr) => (
        <option value={nr} key={nr}>
          {nr}
        </option>
      ))}
    </select>
  );
};

export default Select;
