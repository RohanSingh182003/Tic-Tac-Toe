import React from "react";

const Signup = () => {
  return (
    <div className="h-full py-2 flex flex-col justify-between">
      <div>
        {/* ---------------------------------- heading ---------------------------------- */}
        <div>
          <p className="font-semibold mb-1">Create account</p>
          <p className="font-extrabold text-3xl">
            Let's get to know you better!
          </p>
        </div>
        {/* ---------------------------------- your name ---------------------------------- */}
        <div className="form-control w-full mt-4">
          <label className="label">
            <span className="label-text font-bold">Your name</span>
          </label>
          <input
            type="text"
            placeholder="Type your name here"
            className="input input-bordered w-full bg-gray-100"
          />
        </div>
        {/* ---------------------------------- username ---------------------------------- */}
        <div className="form-control w-full mt-2">
          <label className="label">
            <span className="label-text font-bold">Username</span>
          </label>
          <input
            type="text"
            placeholder="Type your username here"
            className="input input-bordered w-full bg-gray-100"
          />
        </div>
        {/* ---------------------------------- email ---------------------------------- */}
        <div className="form-control w-full mt-2">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type your email here"
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
        <button className="bg-success p-3 rounded-md w-full text-white">
          Congratilations! account created
        </button>
        <button className="bg-yellow-500 p-3 rounded-md w-full text-white mt-3">
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
