import view from "../components/view";
import display from "./display";

const stateRepresentation = (model: Model) => {
  const representation = view.playing(model);
  display(representation);
};

export default stateRepresentation;
