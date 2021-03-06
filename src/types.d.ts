type RangeOf<N extends number> = Partial<TupleOf<unknown, N>>["length"];

type TileId = RangeOf<5>;

type TowerType = "LEFT" | "MIDDLE" | "RIGHT";

type checkState = {
  (model: Model): boolean;
};

type Display = {};

type PresentType = "INIT" | "PICK" | "DROP";

type PickPayload = { tileId: TileId };

type DropPayload = {
  tileId: TileId;
  tower: TowerType;
};

type ActionPick = (payload: PickPayload, present: Presenter) => void;

type ActionDrop = (
  payload: { tile: number; to_tower: number },
  present: Presenter
) => void;

type Status = "INIT" | "CAN_MOVE" | "MOVING" | "SOLVED";

type ComponentType = "BOARD" | "TOWER" | "TILE";

interface PresentPick {
  type: "PICK";
  payload: PickPayload;
}

interface PresentInit {
  type: "INIT";
}

interface PresentDrop {
  type: "DROP";
  payload: DropPayload;
}

type PresentData = PresentPick | PresentInit | PresentDrop;

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

interface Actions {
  INIT: (present: Presenter) => void;
  PICK: ActionPick;
  DROP: ActionDrop;
}
