import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    number: Yup.string().required("Number is required"),
  });

  const handleSubmit = (values, options) => {
    const duplicateContact = contacts.find(
      (contact) =>
        contact.name === values.name || contact.number === values.number
    );

    if (duplicateContact) {
      toast.error("Contact with this name or number already exists!");
    } else {
      dispatch(addContact({ name: values.name, number: values.number }));
      toast.success("Contact added successfully!");
      options.resetForm();
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-center mb-4">
        Add New Contact
      </h2>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex gap-5 justify-center items-center">
            <div>
              <Field
                name="name"
                placeholder="Name"
                className={`border rounded p-2 w-full focus:outline-none focus:ring-2 ${
                  errors.name && touched.name
                    ? "ring-blue-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
            <div>
              <Field
                name="number"
                placeholder="Phone Number"
                className={`border rounded p-2 w-full focus:outline-none focus:ring-2 ${
                  errors.number && touched.number
                    ? "ring-blue-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 w-52 hover:bg-blue-600 transition-colors duration-300"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default ContactEditor;
