import dispatch from "../Actions/dispatch";
import state from "./state";

const nap = (model: Model) => {
  if (state.isSolved(model)) {
    dispatch({ type: "SOLVE" });
  }
};

export default nap;
