import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import logoForLight from "../../../assets/logo-01.png";
import logoForDark from "../../../assets/logo-02.png";
import userImg from "../../../assets/user.jpg";
import { FaPhone } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
const Navbar = ({ isDarkMode, setDarkMood, setSelectedMood }) => {
  const { user, logout } = useContext(AuthContext);
  const [darkModeBtn, setDarkModeBtn] = useState(null);
  const location = useLocation();

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          title: "Logout Successfully",
          icon: "success",
        });
      })
      .catch((error) => error.message);
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!location?.pathname[1]) {
      setDarkModeBtn(true);
    }
  }, []);

  const handleDarkMood = (e) => {
    // console.log(e.target.checked);
    setDarkMood(!isDarkMode);
  };

  const links = (
    <>
      <ActiveLink to={"/"}>Home</ActiveLink>
      <ActiveLink to={"/all-painting-craft"}>All Art & Craft</ActiveLink>
      <ActiveLink to={"/add-painting-craft"}>Add Craft Item</ActiveLink>
      <ActiveLink to={"/my-painting-craft-list"}>
        My Art & Craft List
      </ActiveLink>
    </>
  );
  return (
    <div className=" w-full shadow-lg">
      <div className="py-2 px-5 md:px-10 bg-[#002B45] text-white  flex items-center justify-between gap-10">
        <div className="flex gap-2">
          <button className="border border-white px-1">US</button>
          <button className="border border-white px-1">BN</button>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden md:flex">
            <span> Hot Line: +8801676446077</span>
          </span>
          <div className="flex items-center gap-3">
            {/* <img
              src={userImg}
              alt="User Avatar"
              className="rounded-full w-[40px] h-[40px]"
            /> */}
            <div className="dropdown dropdown-end me-3">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost hover:bg-neutral btn-circle flex justify-center items-center  avatar tooltip tooltip-bottom dropdown dropdown-hover "

                // data-tip={user && user?.displayName}
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Image"
                    src={(user && user?.photoURL) || userImg}
                  />
                </div>
                {user && (
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] top-11  text-neutral menu p-2 shadow bg-base-100 rounded-lg w-52"
                  >
                    <li>
                      <span>{user && user?.displayName}</span>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div>
            {darkModeBtn && (
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => handleDarkMood(e)}
                  {...isDarkMode}
                />
              </label>
            )}
          </div>
        </div>
      </div>
      <div className="md:px-5">
        <div className="navbar">
          <div className="navbar-start ">
            <div className="dropdown">
              <div tabIndex={0} role="button" className=" md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#876445]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-white w-[200px] rounded-box "
              >
                {links}
              </ul>
            </div>
            <img
              src={isDarkMode ? logoForDark : logoForLight}
              className=" w-2/3 lg:w-[200px] ms-3 lg:ms-0"
              alt=""
            />
          </div>
          <div className="gap-5 items-center navbar-center hidden md:flex">
            {links}
          </div>

          <div className="navbar-end">
            {user ? (
              <div className="flex justify-center">
                <button onClick={handleLogout} className="btn btn-neutral">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
