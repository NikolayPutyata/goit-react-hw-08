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
      <Formik initialValues={initialValues} onSubmit={handleSumbit}>
        <Form>
          <Field name="name" />
          <Field type="email" name="email" />
          <Field type="password" name="password" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
