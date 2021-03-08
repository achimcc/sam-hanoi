import { getJSDocReturnTag } from "typescript";
import state from "./state";

const defaultTowers = (tiles: number) =>
  <TowerData>{
    LEFT: [0, 1, 2, 3],
    MIDDLE: [],
    RIGHT: [],
  };

const model: Model = {
  data: { towers: defaultTowers, tiles: 4, status: "INIT" },
  present: (data: DispatchData) => {
    switch (data.type) {
      case "INIT": {
        const { tiles } = data.payload;
        model.data.tiles = tiles;
        model.data.towers = defaultTowers(tiles);
        state.render(model);
        break;
      }
      case "PICK": {
        break;
      }
      case "DROP": {
        const { tower, tileId } = data.payload;
        if (Math.min(...model.data.towers[tower]) <= tileId) break;
        for (var towerId in model.data.towers)
          if (model.data.towers[towerId].includes(tileId))
            model.data.towers[towerId].shift();
        model.data.towers[tower].unshift(tileId);
        state.render(model);
        break;
      }
      case "SOLVED": {
        model.data.status = "SOLVED";
        state.render(model);
        break;
      }
      default: {
        break;
      }
    }
  },
};

export default model;
