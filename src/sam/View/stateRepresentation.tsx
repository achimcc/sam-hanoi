import React from "react";
import view from "./view";
import display from "./display";

const stateRepresentation = (model: Model): void => {
  let representation = <div> Playing</div>;
  switch (model.data.status) {
    case "INIT":
      representation = view.init();
      break;
    case "PLAYING":
      representation = view.playing(model);
      break;
    case "SOLVED":
      representation = view.solved(model);
      break;
  }
  display(representation);
};

export default stateRepresentation;
