import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignupStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
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
    // TODO: Add form validation and API call to create new user
    navigate("/StudentDashboard");
  };

  const inputs = [
    { title: "Department", type: "text", placeholder: "Eg: Computer Science" },
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
            onBlur={handleChange}
            className="container pl-4 pr-16 py-2"
            defaultValue={formData[item.title.toLowerCase()]}
            required
          />
        </div>
      );
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-fit flex flex-col gap-6 justify-center self-center"
    >
      <div className="flex flex-col gap-4 w-fit">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm">First Name</p>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Eg: Ibrahim"
              onChange={handleChange}
              className="container pl-4 pr-16 py-2"
              value={formData.firstName}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Last Name</p>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Eg: Ibrahim"
              onChange={handleChange}
              className="container pl-4 pr-16 py-2"
              value={formData.lastName}
              required
            />
          </div>
        </div>
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
