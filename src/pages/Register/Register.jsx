import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center px-5 md:px-0 min-h-screen  pb-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl border">
          <h1 className="text-3xl my-5 text-center font-bold ">
            Register an Account
          </h1>
          <form className="card-body  pt-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral  ">Login</button>
            </div>
          </form>
          <p className="label-text-alt text-center mb-5">
            Have an account? please{" "}
            <Link to={"/register"} className=" link link-primary link-hover ">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
