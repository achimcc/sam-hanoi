import React from "react";
import Board from "../components/Board/Board";
import Init from "../components/Init/Init";
import Solved from "../components/Solved/Solved";

const view = {
  playing: (model: Model) => <Board model={model} />,
  solved: (model: Model) => <Solved model={model} />,
  init: () => <Init />,
};

export default view;
