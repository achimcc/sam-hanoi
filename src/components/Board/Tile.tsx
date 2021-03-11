import styled from "styled-components";
import { useDrag } from "react-dnd";

interface Props {
  tileId: TileId;
  canDrag: boolean;
  nrTiles: number;
}

const type: ComponentType = "TILE";

const TileDiv = styled.div<{
  isDragging: Boolean;
  tileId: TileId;
  nrTiles: number;
}>`
  border: 2px solid #3eb0ef;
  border-radius: 10px/40%;
  color: black;
  margin: 5px;
  width: ${(props) => (props.tileId + 10 / props.nrTiles) * 10}%;
  background: ${(props) => (props.isDragging ? "#3eb0ef" : "transparent")};
`;

const Tile = ({ tileId, canDrag, nrTiles }: Props) => {
  const [monitor, drag] = useDrag(() => ({
    item: { tileId, type },
    canDrag: (monitor) => monitor.canDrag(),
    collect: (monitor) => {
      return monitor;
    },
  }));

  monitor.canDrag = () => canDrag;

  return (
    <TileDiv isDragging={false} tileId={tileId} ref={drag} nrTiles={nrTiles}>
      {tileId}
    </TileDiv>
  );
};

export default Tile;
