import React from "react";
import Board from "../components/Board";

const view = {
  playing: (model: Model) => {
    return (
      <React.Fragment>
        <Board model={model} />
      </React.Fragment>
    );
  },
};

export default view;
