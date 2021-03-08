import { getJSDocReturnTag } from "typescript";
import state from "./state";

const defaultTowers = (tiles: number) =>
  <TowerData>{
    LEFT: Array.from(Array(tiles).keys()),
    MIDDLE: [],
    RIGHT: [],
  };

const model: Model = {
  data: { towers: defaultTowers, tiles: 4, status: "INIT", count: 0 },
  present: (data: DispatchData) => {
    switch (data.type) {
      case "START": {
        const { tiles } = data.payload;
        model.data.tiles = tiles;
        model.data.towers = defaultTowers(tiles);
        model.data.count = 0;
        model.data.status = "PLAYING";
        state.render(model);
        break;
      }
      case "DROP": {
        const { tower, tileId } = data.payload;
        if (!state.canDrop(model, tileId, tower)) break;
        for (var towerId in model.data.towers)
          if (model.data.towers[towerId].includes(tileId))
            model.data.towers[towerId].shift();
        model.data.towers[tower].unshift(tileId);
        model.data.count++;
        state.render(model);
        break;
      }
      case "SOLVED": {
        if (!state.isSolved(model)) break;
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
