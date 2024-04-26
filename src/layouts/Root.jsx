import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-openSans">
      <Outlet />
    </div>
  );
};

export default Root;
