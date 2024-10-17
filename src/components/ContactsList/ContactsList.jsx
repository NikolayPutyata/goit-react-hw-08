import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

const ContactsList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
