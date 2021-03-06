import React from "react";
import Board from "./Board";

const view = {
  playing: (model: Model) => {
    return (
      <React.Fragment>
        <Board towerData={model.towers} />
      </React.Fragment>
    );
  },
};

export default view;
