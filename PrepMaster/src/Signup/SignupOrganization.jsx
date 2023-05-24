import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import AuthAdmin from "../Logic/AuthAdmin";

export default function SignupOrganization() {
  const navigate = useNavigate();
  const inputs = [
    {
      title: "Organization Name",
      type: "text",
      placeholder: "Eg: Hope Enterprise University College",
    },
    { title: "Work Email", type: "email", placeholder: "Eg:abc123@gmail.com" },
    { title: "Password", type: "password", placeholder: "Enter password" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      AuthAdmin(values).then((valid) => {});
    },
  });

  const RenderInputs = () => {
    return inputs.map((item) => {
      return (
        <div key={item.title} className="flex flex-col gap-2">
          <p className="text-sm">{item.title}</p>
          <input
            type={item.type}
            name={item.title}
            id={item.title}
            placeholder={item.placeholder}
            className="container pl-4 pr-16 py-2"
            size="52"
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
