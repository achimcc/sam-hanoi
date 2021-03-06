import state from "./state";

const defaultTowers: TowerData = {
  LEFT: [0, 1, 2, 3, 4],
  MIDDLE: [],
  RIGHT: [],
};

export const model: Model = {
  status: "INIT",
  towers: defaultTowers,
  present: ({ type, payload }: Data) => {
    switch (type) {
      case "INIT": {
        model.towers = defaultTowers;
        break;
      }
      default: {
        break;
      }
    }
    state.render(model);
  },
};
