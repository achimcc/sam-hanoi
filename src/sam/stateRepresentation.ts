import view from "./view";
import display from "./display";

const stateRepresentation = (model: Model) => {
  const representation = view.playing(model);
  display(representation);
};

export default stateRepresentation;
