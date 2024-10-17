import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(addContact({ name: values.name, number: values.number }));

    options.resetForm();
  };
  return (
    <>
      <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" />
          <Field name="number" />
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactEditor;
