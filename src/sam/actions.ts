const actions: Actions = {
  INIT: (present: Presenter) => {
    present({ type: "INIT" });
  },
  PICK: (payload: PickPayload, present: Presenter) => {},
  DROP: (payload: DropPayload, present: Presenter) => {
    console.log("here drop: ", payload);
  },
};

export default actions;
