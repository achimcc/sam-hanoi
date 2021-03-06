import React from "react";
import styled from "styled-components";
import Tower from "./Tower";

interface Props {
  towerData: TowerData;
}

const Board = ({ towerData }: Props) => {
  const BoardDiv = styled.div`
    border: 2px solid #3eb0ef;
    color: rgba(255, 255, 255, 0.75);
    display: flex;
    flex-direction: row;
  `;
  const towers: Array<TowerType> = ["LEFT", "MIDDLE", "RIGHT"];
  const tiles: Array<TileId> = [0, 1, 2, 3];
  return (
    <BoardDiv>
      {towers.map((tower) => (
        <Tower tower={tower} key={tower} tiles={towerData[tower]} />
      ))}
    </BoardDiv>
  );
};

export default Board;
