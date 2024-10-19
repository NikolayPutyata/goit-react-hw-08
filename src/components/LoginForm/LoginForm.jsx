import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(logIn({ ...values }));
    options.resetForm();
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-3">Login</h2>
      <div className="max-w-md mx-auto mt-5 p-6 border border-gray-300 rounded-lg shadow-lg">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="flex flex-col space-y-4">
            <Field
              name="email"
              type="email"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
            <Field
              name="password"
              type="password"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition-colors duration-300"
            >
              Log In
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
