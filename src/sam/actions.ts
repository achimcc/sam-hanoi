const actions: Actions = {
  INIT: (present: Presenter) => {
    present({ type: "INIT" });
  },
  PICK: (payload: PickPayload, present: Presenter) => {},
  DROP: (payload: { tile: number; to_tower: number }, present: Presenter) => {},
};

export default actions;
