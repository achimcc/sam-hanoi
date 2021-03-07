type RangeOf<N extends number> = Partial<TupleOf<unknown, N>>["length"];

type TileId = RangeOf<5>;

type TowerType = "LEFT" | "MIDDLE" | "RIGHT";

type checkState = {
  (model: Model): boolean;
};

type Display = {};

type PickPayload = { tileId: TileId };

type InitPayload = { numberTiles: number };

type DropPayload = {
  tileId: TileId;
  tower: TowerType;
};

type Payload = PickPayload | InitPayload | DropPayload;

type ActionPick = (present: Presenter, payload: PickPayload) => void;

type ActionDrop = (present: Presenter, payload: DropPayload) => void;

type DispatchType = "INIT" | "PICK" | "DROP";

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

type DispatchData = PickTile | InitGame | DropTile;

type Presenter = {
  (data: Data): void;
};

type TowerData = Object<TowerType, Array<TileId>>;

interface Model {
  status: Status;
  towers: Towers;
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
}
