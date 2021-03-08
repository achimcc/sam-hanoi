import styled from "styled-components";
import { useDrop } from "react-dnd";
import Tile from "./Tile";
import dispatch from "../sam/dispatch";

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
  const onDrop = ({ tileId }: TileId) => {
    const payload: DropPayload = { tileId, tower };
    dispatch({ type: "DROP", payload });
  };
  const accept: ComponentType = "TILE";
  const [, drop] = useDrop(() => ({
    accept: "TILE",
    drop: onDrop,
  }));
  console.log("Tower", tower, tiles);

  return (
    <TowerDiv ref={drop} canDrop={false}>
      {tiles.map((tileId, ind) => (
        <Tile key={tileId} canDrag={ind === 0} tileId={tileId} />
      ))}
    </TowerDiv>
  );
};

export default Tower;
