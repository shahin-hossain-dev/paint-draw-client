import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
  return (
    <div className="font-openSans">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
