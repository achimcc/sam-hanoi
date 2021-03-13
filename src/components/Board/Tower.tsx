import styled from "styled-components";
import { useDrop } from "react-dnd";
import Tile from "./Tile";
import dispatch from "../../sam/Actions/dispatch";

interface Props {
  tower: TowerType;
  tiles: Array<TileId>;
  nrTiles: number;
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

const Tower = ({ tower, tiles, nrTiles }: Props) => {
  const onDrop = ({ tileId }: TileId) => {
    const payload: DropPayload = { tileId, tower };
    dispatch({ type: "DROP", payload });
  };
  const [, drop] = useDrop(() => ({
    accept: "TILE",
    drop: onDrop,
  }));

  return (
    <TowerDiv ref={drop} canDrop={false}>
      {tiles.map((tileId, ind) => (
        <Tile
          key={tileId}
          canDrag={ind === 0}
          tileId={tileId}
          nrTiles={nrTiles}
        />
      ))}
    </TowerDiv>
  );
};

export default Tower;
