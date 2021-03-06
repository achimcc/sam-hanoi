import { ReactElement } from "react";
import ReactDOM from "react-dom";

const display = (representation: ReactElement) => {
  const app = document.getElementById("app");
  ReactDOM.render(representation, app);
};

export default display;
