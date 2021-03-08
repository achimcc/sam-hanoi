import dispatch from "./dispatch";

const nap = (model: Model) => {
  console.log("nap", model.data.towers["RIGHT"].length, model.data.tiles);
  if (model.data.towers["RIGHT"].length === model.data.tiles) {
    console.log("Solved!");
    dispatch({ type: "SOLVED" });
  }
};

export default nap;
