import React from "react";

const BoardElement = (props) => {
    console.log('render')
  return (
    <div
      onClick={() => props.controlGame(props.index)}
      className="w-full h-24 border-4 border-yellow-300 grid place-items-center"
    >
      <p className="text-7xl text-blue-700">{props.element}</p>
    </div>
  );
};

export default BoardElement;
