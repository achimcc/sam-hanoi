import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

interface Props {
  tileId: TileId;
}

const type: ComponentType = "TILE";

const TileDiv = styled.div<{ isDragging: Boolean; tileId: TileId }>`
  border: 2px solid #3eb0ef;
  border-radius: 10px/50%;
  color: black;
  margin: 5px;
  padding: 10px;
  height: 40px;
  width: ${(props) => ((props.tileId + 1) / 5) * 80}%;
  background: ${(props) => (props.isDragging ? "#3eb0ef" : "transparent")};
`;

const Tile = ({ tileId }: Props) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    item: { tileId, type },
  }));

  return (
    <TileDiv isDragging={false} tileId={tileId} ref={drag}>
      {tileId}
    </TileDiv>
  );
};

export default Tile;
