import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import ContactsList from "../../components/ContactsList/ContactsList";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <title>Contacts</title>
      <ContactEditor />
      {isLoading && <h3>Request in progress...</h3>}
      <ContactsList />
    </div>
  );
};

export default Contacts;
