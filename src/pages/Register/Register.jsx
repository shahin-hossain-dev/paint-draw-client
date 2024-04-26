import React, { useContext, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { user, createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    console.log(name, photoURL);

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    if (!/^(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)) {
      setError("At least one Uppercase or Lowercase character");
    }
    // create user with firebase
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(name, photoURL).then(() => {
          signOut(auth);
          navigate("/login");
        });

        if (result.user) {
          Swal.fire({
            title: "Account Created Successfully",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        if (error.message.includes("email-already")) {
          setError("This email already been used");
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center px-5 md:px-0 min-h-screen mt-5 pb-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl border">
          <h1 className="text-2xl my-5 font-exo text-center font-bold ">
            Register an Account
          </h1>
          <form onSubmit={handleRegister} className="card-body  pt-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-neutral  ">Register</button>
            </div>
          </form>
          <p className="label-text-alt text-center mb-5">
            Have an account? please{" "}
            <Link to={"/login"} className=" link link-primary link-hover ">
              Login
            </Link>
          </p>
          <div className="mb-6 mx-8">
            <p className="text-red-600 font-semibold text-center">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
