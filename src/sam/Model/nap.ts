import dispatch from "./dispatch";
import state from "./state";

const nap = (model: Model) => {
  console.log("nap", model);
  if (state.isSolved(model)) {
    console.log("solved from model!");
    dispatch({ type: "SOLVE" });
  }
};

export default nap;
