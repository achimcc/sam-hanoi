import styled from "styled-components";
import dispatch from "../../sam/dispatch";
import MidiPlayer from "midi-player-ts";

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

let midi;

const load = async (player: any) => {
  player.stop();
  midi = await fetch("./elise.mid").then((response) => response.arrayBuffer());
  player.loadArrayBuffer(midi);
};

const Solved = ({ model }: Props) => {
  const onReset = () => dispatch({ type: "INIT" });
  const { count: moves, nrTiles: tiles } = model.data;
  const append = (nr: number) => (nr > 1 ? "s" : "");
  const player = new MidiPlayer.Player();
  const play = async () => {
    await load(player);
    player.play();
  };

  return (
    <SolvedDiv>
      <div>Solved!</div>
      <div>
        <button onClick={() => load(player)}>Load</button>
      </div>
      <div>
        <button onClick={play}>Play</button>
      </div>
      <div>{`It took you ${moves} move${append(
        moves
      )} to solve the Problem with ${tiles} tile${append(tiles)}.`}</div>
      <div>
        <button onClick={onReset}>Reset</button>
      </div>
      <div>
        <button>Start</button>
      </div>
    </SolvedDiv>
  );
};

export default Solved;
