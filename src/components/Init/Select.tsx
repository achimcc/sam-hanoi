import React from "react";

interface Props {
  onChange: (nrTiles: number) => void;
}

const Select = ({ onChange }: Props) => {
  const towers: Array<TowerType> = ["LEFT", "MIDDLE", "RIGHT"];
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nrTiles = parseInt(e.target.value);
    onChange(nrTiles);
  };
  return (
    <select onChange={changeHandler} id="cars">
      {Array.from(Array(10).keys()).map((nr) => (
        <option value={nr} key={nr}>
          {nr}
        </option>
      ))}
    </select>
  );
};

export default Select;
