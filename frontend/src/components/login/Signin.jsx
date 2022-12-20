import React from "react";

const Signin = () => {
  return (
    <div className="h-full py-2 flex flex-col justify-between">
      <div>
        {/* ---------------------------------- heading ---------------------------------- */}
        <div>
          <p className="font-semibold mb-1">Login</p>
          <p className="font-extrabold text-3xl">Please Enter Your Details</p>
        </div>
        {/* ---------------------------------- username ---------------------------------- */}
        <div className="form-control w-full mt-4">
          <label className="label">
            <span className="label-text font-bold">Username</span>
          </label>
          <input
            type="text"
            placeholder="Type your username here"
            className="input input-bordered w-full bg-gray-100"
          />
        </div>
        {/* ---------------------------------- password ---------------------------------- */}
        <div className="form-control w-full mt-2">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type your password here"
            className="input input-bordered w-full bg-gray-100"
          />
        </div>
      </div>
      <div>
        <button className="bg-error p-3 rounded-md w-full text-white">
          Enter correct details
        </button>
        <button className="bg-yellow-500 p-3 rounded-md w-full text-white mt-3">
          Register
        </button>
      </div>
    </div>
  );
};

export default Signin;
