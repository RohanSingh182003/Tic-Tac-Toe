import React from "react";

const AddUser = () => {
  return (
    <div className="place-self-start pt-4 w-full">
      <p className="p-2 text-sm">Start a new game</p>
      <p className="text-3xl font-bold px-2">Whom do you want to play with?</p>
      {/* ---------------------------------- email ---------------------------------- */}
      <div className="form-control w-full mt-6">
        <label className="label">
          <span className="label-text font-bold">Email</span>
        </label>
        <input
          type="email"
          placeholder="Type your email here"
          className="input input-bordered w-full bg-gray-100"
        />
      </div>
      {/* ------------------------------- start game button ------------------------------- */}
      <div className="absolute bottom-4 right-0 w-full px-2">
      <button className="bg-yellow-500 p-3 rounded-md w-full text-white mt-6">
        Start game
      </button>
      </div>
    </div>
  );
};

export default AddUser;
