import CustomButton from "../../Components/CustomButton";
import { useFormik } from "formik";

export default function SAdminProfile() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      telephone: "",
      school: "",
      department: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const inputs = [
    {
      title: "Organization Name",
      placeHolder: "Enter Organization Name",
      inputType: "text",
      required: true,
    },
    {
      title: "Email",
      placeHolder: "abc123@gmail.com",
      inputType: "email",
      required: true,
    },
  ];

  function RenderInputField() {
    return inputs.map((item) => {
      return (
        <div key={item.title} className="flex flex-col gap-2">
          <div className="flex flex-row gap-4 justify-between md:w-full max-md:flex-col">
            <p className="w-[17rem] md:self-center">{item.title}</p>
            <input
              className="container flex justify-center pl-4 pr-10 py-2 max-md:w-96"
              type={item.inputType}
              name={item.title.toLowerCase()} // Update the name attribute
              placeholder={item.placeHolder}
              id={item.title}
              size="33"
              {...(item.required ? { required: true } : null)}
              onBlur={formik.handleChange}
              defaultValue={formik.values[item.title.toLowerCase()]}
            />
          </div>
        </div>
      );
    });
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="fields flex flex-col gap-10 w-fit"
    >
      <RenderInputField />
      <div className="flex justify-end">
        <button
          type="submit"
          className="submit-btn flex justify-center self-center"
        >
          {" "}
          Save Changes
        </button>
      </div>
    </form>
  );
}
