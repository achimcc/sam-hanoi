const actions: Actions = {
  INIT: (present: Presenter, payload: InitPayload) => {
    present(payload);
  },
  PICK: (present: Presenter, payload: PickPayload) => {},
  DROP: (present: Presenter, payload: DropPayload) => {
    present(payload);
  },
  SOLVED: (present) => {},
};

export default actions;
