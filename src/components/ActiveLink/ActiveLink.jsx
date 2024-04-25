import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "underline text-[#002B45] py-1  " : "text-[#002B45] "
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
