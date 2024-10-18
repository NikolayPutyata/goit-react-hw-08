import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="max-w-md p-3 border border-gray-300 rounded-lg shadow-lg flex gap-10 items-center justify-between">
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
