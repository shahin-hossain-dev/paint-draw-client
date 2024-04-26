import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
