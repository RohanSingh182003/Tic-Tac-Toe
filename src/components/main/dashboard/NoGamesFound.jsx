import React from "react";

const NoGamesFound = () => {
  return (
    <div className="w-full">
      {/* ---------------------------------- heading ---------------------------------- */}
      <div className="text-6xl w-full main-heading">
        <p className="text-center mt-6">No Games</p>
        <p className="text-center mt-6">Found</p>
      </div>
      {/*----------------------------------- start a new game ----------------------------------- */}

      <button className="bg-yellow-500 p-3 mt-8 rounded-md w-full text-white">
        Start a new game
      </button>
    </div>
  );
};

export default NoGamesFound;
