const actions: Actions = {
  START: (present: Presenter, intent: Intent) => {
    present(intent);
  },
  DROP: (present: Presenter, intent: Intent) => {
    present(intent);
  },
  SOLVE: (present) => {},
};

export default actions;
