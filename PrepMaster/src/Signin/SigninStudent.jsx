import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SigninStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/StudentDashboard");
  };
  const inputs = [
    {
      title: "Email",
      placeHolder: "abc123@gmail.com",
      type: "email",
    },
    {
      title: "Password",
      placeHolder: "Enter password",
      type: "password",
    },
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
            placeholder={item.placeHolder}
            className="container pl-4 pr-16 py-2"
            onBlur={handleChange}
            defaultValue={formData[item.title.toLowerCase()]}
            required
            size="33"
          />
        </div>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 w-fit">
        <RenderInputs />
        <p className="text-sm self-center">
          Don't have an account?{" "}
          <span
            className="colored-mini-text font-semibold login"
            onClick={() => navigate("/Signup")}
          >
            Signup
          </span>
        </p>
        <input
          type="submit"
          value="Login"
          className="submit-btn flex justify-center self-center"
        />
      </div>
    </form>
  );
}
