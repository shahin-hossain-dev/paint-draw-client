import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "underline  py-1 font-exo" : "font-exo "
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
