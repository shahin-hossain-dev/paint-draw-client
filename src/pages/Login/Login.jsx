import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
const Login = () => {
  const { googleLogin, githubLogin, userLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return setError("Password should be at least 6 characters");
    }
    userLogin(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Login Successfully",
            icon: "success",
          });
          navigate(from);
        }
      })
      .catch((error) => {
        if (error.message.includes("invalid")) {
          Swal.fire({
            icon: "error",
            title: "Invalid Email or Password",
          });
        } else {
          setError(error.message);
        }
      });
  };

  // handle Google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Login Successfully",
            icon: "success",
          });
          navigate(from);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // handle github login
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        // console.log(result.user);
        if (result.user) {
          Swal.fire({
            title: "Login Successfully",
            icon: "success",
          });
          navigate(from);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center px-5 md:px-0 min-h-screen  pb-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl  border">
          <h1 className="text-2xl font-exo mt-5 text-center font-bold  ">
            Login with {""}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Email & Pass", "Google", "Github"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <form onSubmit={handleLogin} className="card-body  pt-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
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
            <button
              onClick={handleGoogleLogin}
              className="btn btn-info text-white"
            >
              <FaGoogle />
              Continue With Google
            </button>
          </div>
          <div className="form-control my-6 mx-8">
            <button
              onClick={handleGithubLogin}
              className="btn btn-neutral text-white"
            >
              <FaGithub />
              Continue with Github
            </button>
          </div>
          <div className="mb-6 mx-8">
            <p className="text-red-600 font-semibold text-center">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
