import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import ContactsList from "../../components/ContactsList/ContactsList";
import FilterEditor from "../../components/FilterEditor/FilterEditor";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <title>Contacts</title>
      <h1 className="text-2xl font-bold mb-6 text-center">Contacts</h1>

      <ContactEditor />

      <FilterEditor />

      {isLoading && (
        <h3 className="text-center text-gray-600">Request in progress...</h3>
      )}

      <ContactsList />
    </div>
  );
};

export default Contacts;
