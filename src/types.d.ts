type RangeOf<N extends number> = Partial<TupleOf<unknown, N>>["length"];

type LessThan<N extends number | bigint> = intrinsic


type TileId = LessThan<5>;

type TowerType = "LEFT" | "MIDDLE" | "RIGHT";

type checkState = {
  (model: Model): boolean;
};

type Display = {};

type PickPayload = { tileId: TileId };

type InitPayload = { tiles: number };

type DropPayload = {
  tileId: TileId;
  tower: TowerType;
};

type Payload = PickPayload | InitPayload | DropPayload;

type ActionPick = (present: Presenter, payload: PickPayload) => void;

type ActionDrop = (present: Presenter, payload: DropPayload) => void;

type ActionSolve = (present) => void;

type DispatchType = "INIT" | "PICK" | "DROP" | "SOLVED";

type Status = "INIT" | "CAN_MOVE" | "MOVING" | "SOLVED";

type ComponentType = "BOARD" | "TOWER" | "TILE";

interface PickTile {
  type: "PICK";
  payload: PickPayload;
}

interface InitGame {
  type: "INIT";
  payload: InitPayload;
}

interface DropTile {
  type: "DROP";
  payload: DropPayload;
}

interface SolveGame {
  type: "SOLVED";
}

type DispatchData = PickTile | InitGame | DropTile | SolveGame;

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

interface State {
  init: checkState;
  canPick: checkState;
  canDrop: checkState;
  isSolved: checkState;
  render: (model: Model) => void;
}

interface Actions extends Object<DispatchType> {
  INIT: (present: Presenter, payload: InitPayload) => void;
  PICK: ActionPick;
  DROP: ActionDrop;
  SOLVED: ActionSolve;
}
