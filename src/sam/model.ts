import state from "./state";

const defaultTowers: TowerData = {
  LEFT: [0, 1, 2, 3, 4],
  MIDDLE: [],
  RIGHT: [],
};

const model: Model = {
  status: "INIT",
  towers: defaultTowers,
  present: (data: DispatchData) => {
    switch (data.type) {
      case "INIT": {
        model.towers = defaultTowers;
        state.render(model);
        break;
      }
      case "PICK": {
        break;
      }
      default: {
        break;
      }
    }
  },
};

export default model;
