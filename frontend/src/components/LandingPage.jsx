import React from "react";

const LandingPage = () => {
  return (
    <div className="grid place-items-center h-[80vh]">
      {/* ---------------------------------- heading ---------------------------------- */}
      <div className="text-6xl w-full main-heading">
        <p className="text-center text-3xl text-gray-600">Async</p>
        <p className="text-center mt-6">Tic Tac</p>
        <p className="text-center mt-6">Toe</p>
      </div>
      {/* ---------------------------------- buttons ---------------------------------- */}
      <div className="absolute bottom-2 px-4 w-full">
        <button className="bg-yellow-500 p-3 rounded-md w-full text-white">
          Login
        </button>
        <button className="bg-blue-500 p-3 rounded-md w-full text-white mt-3">
          Register
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
