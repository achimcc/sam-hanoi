type LessThan<N extends number | bigint> = intrinsic

type TileId = LessThan<10>;

type TowerType = "LEFT" | "MIDDLE" | "RIGHT";

type checkState = {
  (model: Model): boolean;
};

type Display = {};

type InitPayload = { tiles: number };

type DropPayload = {
  tileId: TileId;
  tower: TowerType;
};

type Payload = PickPayload | InitPayload | DropPayload;

type ActionDrop = (present: Presenter, intent: Intent) => void;

type ActionSolve = (present) => void;

type IntentType = "START" | "DROP" | "SOLVE";

type Status = "INIT" | "PLAYING" | "SOLVED";

type ComponentType = "BOARD" | "TOWER" | "TILE";

interface InitIntent {
  type: "START";
  payload: InitPayload;
}

interface DropIntent {
  type: "DROP";
  payload: DropPayload;
}

interface SolveIntent {
  type: "SOLVE";
}

type Intent = InitIntent | DropIntent | SolveIntent;

type Presenter = {
  (data: Data): void;
};

interface TowerData {
  LEFT: Array<TileId>;
  MIDDLE: Array<TileId>;
  RIGHT: Array<TileId>;
}

interface Model { 
  data: {towers: Towers, tiles: number, status: Status, count: number};
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
  canDrop: checkDrop;
  isSolved: checkState;
  render: (model: Model) => void;
}

interface Actions extends Object<DispatchType> {
  START: (present: Presenter, intent: Intent) => void;
  DROP: ActionDrop;
  SOLVE: ActionSolve;
}
