import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";

interface Props {
  tower: TowerType;
  tiles: Array<TileId>;
}

const Tower = ({ tower, tiles }: Props) => {
  const accept: Array<ComponentType> = ["TILE"];
  const TowerDiv = styled.div<{ canDrop: Boolean }>`
    background: ${(props) => (props.canDrop ? "#3eb0ef" : "transparent")};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `;
  const [collectedProps, drop] = useDrop(() => ({
    accept,
  }));

  return <TowerDiv canDrop={false} ref={drop}></TowerDiv>;
};

export default Tower;
