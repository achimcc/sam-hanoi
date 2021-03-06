import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

interface Props {
  tileId: TileId;
}

const type: ComponentType = "TILE";

export const Tile = ({ tileId }: Props) => {
  const TileDiv = styled.div<{ isDragging: Boolean }>`
    border: 2px solid #3eb0ef;
    border-radius: 10px/50%;
    color: rgba(255, 255, 255, 0.75);
    margin: 5px;
    padding: 10px;
    height: 40px:
    background: ${(props) => (props.isDragging ? "#3eb0ef" : "transparent")};
  `;

  const [collected, drag, dragPreview] = useDrag(() => ({
    item: { tileId, type },
  }));

  return <TileDiv isDragging={false} ref={drag}></TileDiv>;
};
