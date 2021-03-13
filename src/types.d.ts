type LessThan<N extends number | bigint> = intrinsic

type TileId = LessThan<10>;

type TowerType = "LEFT" | "MIDDLE" | "RIGHT";

type checkState = {
  (model: Model): boolean;
};

type Display = {};

type TilesPayload = { nrTiles: number };

type DropPayload = {
  tileId: TileId;
  tower: TowerType;
};

type Payload = PickPayload | TilesPayload | DropPayload;

type Action = (present: Presenter, intent: Intent) => void;

type IntentType = "INIT" | "TILES" | "START" | "DROP" | "SOLVE";

type Status = "INIT" | "PLAYING" | "SOLVED";

type ComponentType = "BOARD" | "TOWER" | "TILE";

interface InitIntent {
  type: "INIT";
}

interface TilesIntent {
  type: "TILES";
  payload: InitPayload;
}

interface StartIntent {
  type: "START";
}

interface DropIntent {
  type: "DROP";
  payload: DropPayload;
}

interface SolveIntent {
  type: "SOLVE";
}

type Intent = InitIntent | TilesIntent | StartIntent | DropIntent | SolveIntent;

type Presenter = {
  (data: Data): void;
};

interface TowerData {
  LEFT: Array<TileId>;
  MIDDLE: Array<TileId>;
  RIGHT: Array<TileId>;
}

interface Model { 
  data: {towers: Towers, nrTiles: number, status: Status, count: number};
  present: Presenter;
}

type checkState = {
  (model: Model): boolean;
};

type checkDrop = {
  (model: Model, tileId: TileId, tower: TowerType): boolean;
}

interface State {
  init: checkState;
  ready: checkState;
  canDrop: checkDrop;
  isSolved: checkState;
  render: (model: Model) => void;
}

interface Actions extends Object<DispatchType> {
  INIT: Action;
  TILES: Action;
  START: Action;
  DROP: Action;
  SOLVE: Action;
}
