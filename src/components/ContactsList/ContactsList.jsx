import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className="space-y-4">
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
