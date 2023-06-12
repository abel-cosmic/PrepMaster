import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateAdmin from "../Logic/CreateAdmin";
import { useFormik } from "formik";
import { useEmail } from "../Logic/TeacherContext";

export default function SignupOrganization() {
  const navigate = useNavigate();
  const { setEmail } = useEmail();
  const [passwordValidation, setPasswordValidation] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      organization: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      if (values.password.length < 8) {
        setPasswordValidation(false);
      } else {
        setPasswordValidation(true);
        CreateAdmin(values).then((valid) => {
          console.log("Data sent");
          console.log(values);
          setEmail(values.email);
          navigate("/AdminDashboard");
        });
      }
    },
  });
  const inputs = [
    {
      title: "Organization",
      type: "text",
      placeholder: "Eg: Hope Enterprise University College",
    },
    { title: "Email", type: "email", placeholder: "Eg:abc123@gmail.com" },
    { title: "Password", type: "password", placeholder: "Enter password" },
  ];

  const RenderInputs = () => {
    return inputs.map((item) => {
      return (
        <div key={item.title} className="flex flex-col gap-2">
          <p className="text-sm">{item.title}</p>
          <input
            type={item.type}
            name={item.title.toLowerCase()}
            id={item.title}
            placeholder={item.placeholder}
            className="container pl-4 pr-16 py-2"
            size="52"
            defaultValue={formik.values[item.title.toLowerCase()]}
            onBlur={formik.handleChange}
            required
          />
        </div>
      );
    });
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-fit flex flex-col gap-6 justify-center self-center max-md:mb-20"
    >
      <div className="flex flex-col gap-4 w-full">
        <RenderInputs />
        {passwordValidation ? null : (
          <p className="text-red-500">
            Password Must be Greater than 8 Characters
          </p>
        )}
      </div>
      <div className="flex flex-row gap-2 justify-start">
        <input type="checkbox" name="terms" id="terms" required />
        <p className="text-sm self-center">
          I agree with{" "}
          <span className="colored-mini-text font-semibold">
            Terms & Conditions
          </span>
        </p>
      </div>

      <p className="text-sm self-center">
        Already have an account?{" "}
        <span
          className="colored-mini-text font-semibold login"
          onClick={() => navigate("/Signin")}
        >
          Login
        </span>
      </p>
      <input
        type="submit"
        value="Sign up"
        className="submit-btn flex justify-center self-center"
      />
    </form>
  );
}
