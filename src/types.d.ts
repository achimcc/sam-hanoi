type RangeOf<N extends number> = Partial<TupleOf<unknown, N>>["length"];

type checkState = {
  (model: Model): boolean;
};

type Display = {};

type PresentType = "INIT" | "PICK" | "DROP";

type ActionPick = (payload: { tile: number }, present: Presenter) => void;

type ActionDrop = (
  payload: { tile: number; to_tower: number },
  present: Presenter
) => void;

type Status = "INIT" | "CAN_MOVE" | "MOVING" | "SOLVED";

type TowerType = "LEFT" | "MIDDLE" | "RIGHT";

type ComponentType = "BOARD" | "TOWER" | "TILE";

type Data = {
  type: PresentType;
  payload?: object;
};

type Presenter = {
  (data: Data): void;
};

type TileId = RangeOf<5>;

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

interface Actions {
  INIT: (present: Presenter) => void;
  PICK: ActionPick;
  DROP: ActionDrop;
}
