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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" type="email" />
          <Field name="password" type="password" />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
