import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "../shared/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center px-5 md:px-0 min-h-screen  pb-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl  border">
          <h1 className="text-3xl mt-5 text-center font-bold ">Login now!</h1>
          <form className="card-body  pt-0">
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
              <button className="btn btn-neutral  text-white">Login</button>
            </div>
          </form>
          <p className="label-text-alt text-center ">
            Don't have any account? please{" "}
            <Link to={"/register"} className=" link link-primary link-hover ">
              Register
            </Link>
          </p>
          <div className="form-control mt-6 mx-8">
            <button className="btn btn-info text-white">
              <FaGoogle />
              Continue With Google
            </button>
          </div>
          <div className="form-control my-6 mx-8">
            <button className="btn btn-neutral text-white">
              <FaGithub />
              Continue with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
