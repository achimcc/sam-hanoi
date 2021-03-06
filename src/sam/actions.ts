export const actions: Actions = {
  INIT: (present: Presenter) => {
    present({ type: "INIT" });
  },
  PICK: (payload: { tile: number }, present: Presenter) => {},
  DROP: (payload: { tile: number; to_tower: number }, present: Presenter) => {},
};
