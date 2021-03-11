import React from "react";
import styled from "styled-components";
import Tower from "./Tower";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface Props {
  model: Model;
}

const BoardDiv = styled.div`
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const Board = ({
  model: {
    data: { towers: towerData, nrTiles },
  },
  model,
}: Props) => {
  const towers: Array<TowerType> = ["LEFT", "MIDDLE", "RIGHT"];
  return (
    <DndProvider backend={HTML5Backend}>
      <BoardDiv>
        {towers.map((tower) => (
          <Tower
            tower={tower}
            key={tower}
            tiles={towerData[tower]}
            nrTiles={nrTiles}
          />
        ))}
      </BoardDiv>
    </DndProvider>
  );
};

export default Board;
