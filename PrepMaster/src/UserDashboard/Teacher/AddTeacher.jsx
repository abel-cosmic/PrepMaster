import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import CreateTeacherHead from "../../Logic/CreateTeacherHead";

export default function AddTeacher() {
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      departmentId: "",
      email: "",
      password: "",
      phoneNumber: "",
      gender: "",
    },
    onSubmit: (values) => {
      CreateTeacherHead(values)
        .then(() => {
          alert("User Created" + JSON.stringify(values, null, 2));
          navigate("/TeacherDashboard");
        })
        .catch((err) => {
          console.error("Something went wrong" + err);
        });
    },
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/departments")
      .then((response) => response.json())
      .then((departments) => {
        const departmentNames = departments.map(
          (department) => department.name
        );
        setOptions(departmentNames);
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
      });
  }, [options]);

  const inputs = [
    {
      value: "firstName",
      title: "First Name",
      placeholder: "Enter first name",
      type: "text",
    },
    {
      value: "lastName",
      title: "Last Name",
      placeholder: "Enter last name",
      type: "text",
    },
    {
      value: "gender",
      title: "Gender",
      placeHolder: "Choose your Gender",
      type: "select",
      options: ["Male", "Female", "Retarded"],
    },
    {
      value: "phoneNumber",
      title: "Phone Number",
      placeholder: "Enter phone number",
      type: "number",
    },
    {
      value: "departmentId",
      title: "Department",
      placeholder: "Enter department",
      type: "select",
      options: options,
    },
    {
      value: "email",
      title: "Email",
      placeholder: "Enter email",
      type: "email",
    },
    {
      value: "password",
      title: "Password",
      placeholder: "Enter password",
      type: "password",
    },
  ];

  return (
    <div className="exam-sheet h-screen flex justify-center place-items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex flex-col gap-6 w-fit rounded-xl p-12 max-md:px-6"
      >
        <p className="md:text-3xl max-md:text-2xl font-medium self-center mb-4">
          Enter Teacher Details
        </p>
        {inputs.map((input) => {
          return (
            <div
              key={input.title}
              className="flex flex-row gap-6 max-md:justify-between"
            >
              <p className="md:w-40 max-md:text-sm max-md:self-center">
                {input.title}
              </p>
              {input.type === "select" && options.length > 0 ? (
                <select
                  className="container bg-white flex pl-4 pr-10 py-2 max-md:w-[14rem]"
                  name={input.value}
                  id={input.title}
                  onBlur={formik.handleChange}
                  required
                >
                  {input.options.map((option, index) => (
                    <option key={option} value={index + 1}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={input.type}
                  className="container w-full flex pl-4 pr-10 py-2 max-md:w-[14rem]"
                  name={input.value}
                  id={input.title}
                  onBlur={formik.handleChange}
                  defaultValue={formik.values[input.value]}
                  placeholder={input.placeholder}
                  size="34"
                  required
                />
              )}
            </div>
          );
        })}

        <div className="flex flex-row gap-6 justify-end">
          <NavLink to={"/AdminDashboard"} element={<AdminDashboard />}>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: "#2e2e2e",
                fontWeight: "400",
                borderRadius: "0.3rem",
                padding: "0.8rem 3rem",
              }}
            >
              Cancel
            </Button>
          </NavLink>

          <input type="submit" value="Save" className="submit-btn" />
        </div>
      </form>
    </div>
  );
}
