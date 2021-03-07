import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import Tile from "./Tile";

interface Props {
  tower: TowerType;
  tiles: Array<TileId>;
}

const TowerDiv = styled.div<{ canDrop: Boolean }>`
  background: ${(props) => (props.canDrop ? "#3eb0ef" : "transparent")};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid black;
`;

const Tower = ({ tower, tiles }: Props) => {
  const accept: Array<ComponentType> = ["TILE"];
  const [collectedProps, drop] = useDrop(() => ({
    accept,
  }));

  return (
    <TowerDiv canDrop={false} ref={drop}>
      {tiles.map((tileId, ind) => (
        <Tile key={tileId} isOnTop={ind === 0} tileId={tileId} />
      ))}
    </TowerDiv>
  );
};

export default Tower;
