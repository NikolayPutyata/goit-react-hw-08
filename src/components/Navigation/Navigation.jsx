import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav className="max-w-md p-3 border border-gray-300 rounded-lg shadow-lg flex gap-10 items-center justify-between">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold transition-colors duration-300"
              : "text-white hover:text-blue-500 transition-colors duration-300"
          }
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold transition-colors duration-300"
                : "text-white hover:text-blue-500 transition-colors duration-300"
            }
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
};

export default Navigation;
