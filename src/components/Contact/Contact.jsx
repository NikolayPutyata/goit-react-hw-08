import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
