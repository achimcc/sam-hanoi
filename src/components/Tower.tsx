import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import Tile from "./Tile";
import actions from "../sam/actions";
import model from "../sam/model";

interface Props {
  tower: TowerType;
  tiles: Array<TileId>;
  model: Model;
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
  const onDrop = (item: TileId) => {
    const payload: DropPayload = { tileId: item, tower };
    actions.DROP(payload, model.present);
  };
  const accept: Array<ComponentType> = ["TILE"];
  const [collectedProps, drop] = useDrop(() => ({
    accept,
    onDrop,
  }));

  return (
    <TowerDiv canDrop={false} ref={drop}>
      {tiles.map((tileId, ind) => (
        <Tile key={tileId} canDrag={ind === 0} tileId={tileId} />
      ))}
    </TowerDiv>
  );
};

export default Tower;
