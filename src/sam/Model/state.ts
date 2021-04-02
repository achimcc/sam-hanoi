import stateRepresentation from "../View/stateRepresentation";
import nap from "./nap";

const state: State = {
  init: (model: Model): boolean => model.data.status === "INIT",
  ready: (model: Model) =>
    model.data.status === "INIT" && model.data.nrTiles !== 0,
  canDrop: (model: Model, tileId: TileId, tower: TowerType) => {
    return Math.min(...model.data.towers[tower]) > tileId;
  },
  isSolved: (model: Model): boolean => {
    return (
      model.data.status === "PLAYING" &&
      model.data.towers["RIGHT"].length === model.data.nrTiles
    );
  },
  render: (model: Model): void => {
    stateRepresentation(model);
    nap(model);
  },
};

export default state;
