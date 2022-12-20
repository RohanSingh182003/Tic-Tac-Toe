import React from "react";
import GameCard from "./GameCard";
import NoGamesFound from "./NoGamesFound";

const Dashboard = () => {
  return (
    <div className="p-6 grid place-items-center min-h-screen">
      <p className="absolute top-6 left-6 font-extrabold text-2xl">
        Your Games
      </p>
      {/* ----------------------------------- no games found box ----------------------------------- */}
      <NoGamesFound/>
      {/* ---------------------------------- peavious games boxes ---------------------------------- */}
      {/* <div className="place-self-start pt-16 w-full">
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
      </div> */}
    </div>
  );
};

export default Dashboard;
