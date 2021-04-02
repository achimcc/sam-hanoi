import state from "./state";

const defaultTowers = (tiles: number) =>
  ({
    LEFT: Array.from(Array(tiles).keys()),
    MIDDLE: [],
    RIGHT: [],
  } as TowerData);

const model: Model = {
  data: { towers: defaultTowers(0), nrTiles: 0, status: "INIT", count: 0 },
  present: (intent: Intent): void => {
    switch (intent.type) {
      case "INIT": {
        model.data.status = "INIT";
        state.render(model);
        break;
      }
      case "TILES": {
        if (!state.init(model)) break;
        model.data.nrTiles = intent.payload.nrTiles;
        break;
      }
      case "START": {
        if (!state.ready(model)) break;
        model.data.towers = defaultTowers(model.data.nrTiles);
        model.data.count = 0;
        model.data.status = "PLAYING";
        state.render(model);
        break;
      }
      case "DROP": {
        const { tower, tileId } = intent.payload;
        if (!state.canDrop(model, tileId, tower)) break;
        for (var towerId in model.data.towers)
          if (model.data.towers[towerId].includes(tileId))
            model.data.towers[towerId].shift();
        model.data.towers[tower].unshift(tileId);
        model.data.count++;
        state.render(model);
        break;
      }
      case "SOLVE": {
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
