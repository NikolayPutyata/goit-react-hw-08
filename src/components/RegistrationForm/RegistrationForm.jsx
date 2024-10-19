import { Field, Form, Formik } from "formik";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSumbit = (values, options) => {
    dispatch(register({ ...values }));
    options.resetForm();
  };
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-3">Register</h2>
      <div className="max-w-md mx-auto mt-5 p-6 border border-gray-300 rounded-lg shadow-lg">
        <Formik initialValues={initialValues} onSubmit={handleSumbit}>
          <Form className="flex flex-col space-y-4">
            <Field
              name="name"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
            <Field
              type="email"
              name="email"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
            <Field
              type="password"
              name="password"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition-colors duration-300"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegistrationForm;
