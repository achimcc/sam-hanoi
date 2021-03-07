const actions: Actions = {
  INIT: (present: Presenter, payload: InitPayload) => {
    present({ type: "INIT", payload });
  },
  PICK: (present: Presenter, payload: PickPayload) => {},
  DROP: (present: Presenter, payload: DropPayload) => {
    console.log("here drop: ", payload);
  },
};

export default actions;
