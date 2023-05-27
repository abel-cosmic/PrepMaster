import CustomButton from "../../Components/CustomButton";
import { useFormik } from "formik";

export default function StudentProfile() {
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
      title: "First & Last Name",
      placeHolder: ["First Name", "Last Name"],
      inputType: "text",
      required: true,
    },
    {
      title: "Email",
      placeHolder: "abc123@gmail.com",
      inputType: "email",
      required: true,
    },
    {
      title: "Telephone",
      placeHolder: "+251912345678 (Optional)",
      inputType: "text",
      required: false,
    },
    {
      title: "School",
      placeHolder: "Hope Enterprise University College (Optonal)",
      inputType: "text",
      required: false,
    },
    {
      title: "Department",
      placeHolder: "Computer Science",
      inputType: "text",
      required: true,
    },
  ];

  function RenderInputField() {
    return inputs.map((item) => {
      return (
        <div key={item.title} className="flex flex-col gap-2">
          {item.placeHolder.length === 2 ? (
            <div className="flex flex-row gap-6 place-content-between">
              <p className="w-48 self-center max-md:hidden">{item.title}</p>
              <div className="flex flex-row gap-2 max-md:flex-col">
                <div className="flex md:flex-row max-md:flex-col md:gap-4 max-md:gap-6">
                  <p className="w-fit md:hidden">{item.placeHolder[0]}</p>
                  <input
                    className="container flex justify-center pl-4 pr-10 py-2 max-md:w-96"
                    type={item.inputType}
                    name="firstname" // Update the name attribute
                    placeholder={item.placeHolder[0]}
                    id={item.placeHolder[0]}
                    {...(item.required ? { required: true } : null)}
                    onBlur={formik.handleChange}
                    defaultValue={formik.values.firstname}
                  />
                  <p className="w-fit md:hidden">{item.placeHolder[1]}</p>
                  <input
                    className="container flex justify-center pl-4 pr-10 py-2 max-md:w-96"
                    type={item.inputType}
                    name="lastname" // Update the name attribute
                    placeholder={item.placeHolder[1]}
                    id={item.placeHolder[1]}
                    {...(item.required ? { required: true } : null)}
                    onBlur={formik.handleChange}
                    defaultValue={formik.values.lastname}
                  />
                </div>
              </div>
            </div>
          ) : (
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
          )}
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
