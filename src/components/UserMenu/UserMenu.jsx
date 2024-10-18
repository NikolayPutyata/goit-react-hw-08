import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  return (
    <div className="max-w-md p-3 border border-gray-300 rounded-lg shadow-lg flex gap-3 items-center justify-between">
      <p className="text-lg font-semibold">Welcome, {name}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition-colors duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
