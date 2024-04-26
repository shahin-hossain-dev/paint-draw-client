import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "underline  py-1" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
