import React, { useState } from "react";
import GamePiece from "../common/GamePiece";
import BoardElement from "./BoardElement";

const Gameboard = () => {
  const [arr, setArr] = useState(Array(9).fill("")); //initialize an array of size 9 with empty string
  const [count, setCount] = useState(0)
  const controlGame = (i) => {
    if (arr[i] != "") return undefined;
    let opArr = arr;
    if(count % 2 === 0){
      opArr[i] = "x";
    } else {
      opArr[i] = "o";
    }
    setCount(count + 1)
    setArr(opArr);
  };
  return (
    <div className="place-self-start pt-4 w-full">
      <p className="text-2xl font-bold">Game With UserName</p>
      <GamePiece />
      {/* ------------------------------------- board heading ------------------------------------- */}
      <button className="mt-6 w-full p-3 bg-yellow-300">Your Move</button>
      {/* ------------------------------------- board game ------------------------------------- */}
      <div key={arr} className="grid grid-cols-3 grid-rows-3 p-4">
        {arr.map((ele, index) => (
          <BoardElement
            key={index}
            element={ele}
            index={index}
            controlGame={controlGame}
          />
        ))}
      </div>
    </div>
  );
};

export default Gameboard;
