import React from "react";
import styled from "styled-components";
import Tower from "./Tower";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface Props {
  model: Model;
}

const BoardDiv = styled.div`
  border: 2px solid #3eb0ef;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  height: 70vh;
  margin: 10vh;
  flex-direction: row;
`;

const Board = ({
  model: {
    data: { towers: towerData },
  },
  model,
}: Props) => {
  const towers: Array<TowerType> = ["LEFT", "MIDDLE", "RIGHT"];
  return (
    <DndProvider backend={HTML5Backend}>
      <BoardDiv>
        {towers.map((tower) => (
          <Tower tower={tower} key={tower} tiles={towerData[tower]} />
        ))}
      </BoardDiv>
    </DndProvider>
  );
};

export default Board;
