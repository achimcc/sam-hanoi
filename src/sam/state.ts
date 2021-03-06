import stateRepresentation from "./stateRepresentation";
import nap from "./nap";

const state: State = {
  init: (model: Model) => false,
  canPick: (model: Model) => false,
  canDrop: (model: Model) => false,
  isSolved: (model: Model) => false,
  render: (model: Model) => {
    stateRepresentation(model);
    nap(model);
  },
};

export default state;
