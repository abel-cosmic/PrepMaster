import { useFormik } from "formik";

export default function AddUser() {
  const input = [{}];

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      department: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return <div></div>;
}
