import React from "react";
import GamePiece from "../common/GamePiece";

const Gameboard = () => {
  return (
    <div className="place-self-start pt-4 w-full">
      <p className="text-2xl font-bold">Game With UserName</p>
      <GamePiece />
    </div>
  );
};

export default Gameboard;
