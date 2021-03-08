const actions: Actions = {
  START: (present: Presenter, payload: InitPayload) => {
    present(payload);
  },
  DROP: (present: Presenter, payload: DropPayload) => {
    present(payload);
  },
  SOLVED: (present) => {},
};

export default actions;
