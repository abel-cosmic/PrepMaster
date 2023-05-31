import { useFormik } from "formik";

export default function AdminSecurity() {
  const formik = useFormik({
    initialValues: {
      old: "",
      new: "",
      confim: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const passwordList = [
    {
      value: "old",
      title: "Old Password",
      placeholder: "Enter old password",
    },
    {
      value: "new",
      title: "New Password",
      placeholder: "Enter new password",
    },
    {
      value: "confirm",
      title: "Confirm Password",
      placeholder: "Re-Enter new password",
    },
  ];

  const RenderPasswordInputs = () => {
    return passwordList.map((item) => {
      return (
        <div key={item.title} className="flex flex-row gap-6 max-md:flex-col">
          <p className="w-44">{item.title}</p>
          <input
            type="password"
            className="container w-fit flex pl-4 pr-10 py-2"
            name={item.value}
            id={item.title}
            onBlur={formik.handleChange}
            defaultValue={formik.values[item.value]}
            placeholder={item.placeholder}
            size="34"
            required
          />
        </div>
      );
    });
  };

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-fit">
      <RenderPasswordInputs />
      <div className="flex justify-end">
        <input
          type="submit"
          value="Save Changes"
          className="submit-btn flex justify-center self-center"
        />
      </div>
    </form>
  );
}
