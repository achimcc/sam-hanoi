import styled from "styled-components";
import dispatch from "../../sam/Actions/dispatch";

const SolvedDiv = styled.div`
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

interface Props {
  model: Model;
}

const Solved = ({ model }: Props) => {
  const onReset = () => dispatch({ type: "INIT" });
  const { count: moves, nrTiles: tiles } = model.data;
  const append = (nr: number) => (nr > 1 ? "s" : "");

  return (
    <SolvedDiv>
      <div>Solved!</div>
      <div>{`It took you ${moves} move${append(
        moves
      )} to solve the Problem with ${tiles} tile${append(tiles)}.`}</div>
      <div>
        <button onClick={onReset}>Reset</button>
      </div>
    </SolvedDiv>
  );
};

export default Solved;
