import stateRepresentation from "./stateRepresentation";
import nap from "./nap";

const state: State = {
  init: (model: Model) => false,
  canPick: (model: Model) => false,
  canDrop: (model: Model, tileId: TileId, tower: TowerType) => {
    return Math.min(...model.data.towers[tower]) > tileId;
  },
  isSolved: (model: Model) => {
    return model.data.towers["RIGHT"].length === model.data.tiles;
  },
  render: (model: Model) => {
    stateRepresentation(model);
    nap(model);
  },
};

export default state;
