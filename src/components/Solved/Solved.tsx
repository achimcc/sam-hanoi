import React from "react";
import dispatch from "../../sam/dispatch";

interface Props {
  model: Model;
}

const Solved = ({ model }: Props) => {
  const onReset = () => dispatch({ type: "INIT" });
  return (
    <React.Fragment>
      <div>Solved!</div>
      <div>
        <button onClick={onReset}>Reset</button>
      </div>
    </React.Fragment>
  );
};

export default Solved;
