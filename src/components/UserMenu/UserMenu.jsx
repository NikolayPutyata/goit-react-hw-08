import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  return (
    <div>
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
