import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex space-x-4">
      <NavLink
        to="/register"
        className="text-white hover:text-blue-700 transition-colors duration-300"
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className="text-white hover:text-blue-700 transition-colors duration-300"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
