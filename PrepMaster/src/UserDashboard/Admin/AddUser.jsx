import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminUsers from "./AdminUsers";
import CreateStudent from "../../Logic/CreateStudent";
import CreateTeacherHead from "../../Logic/CreateTeacherHead";
import CreateTeacher from "../../Logic/CreateTeacher";

export default function AddUser() {
  const inputs = [
    {
      value: "firstname",
      title: "First Name",
      placeholder: "Enter first name",
      type: "text",
    },
    {
      value: "lastname",
      title: "Last Name",
      placeholder: "Enter last name",
      type: "text",
    },
    {
      value: "phoneNumber",
      title: "Phone Number",
      placeholder: "Enter Phone Number",
      type: "number",
    },
    {
      value: "gender",
      title: "Gender",
      placeholder: "Enter Gender",
      type: "select",
      options: ["Male", "Female", "Retarded"],
    },
    {
      value: "department",
      title: "Department",
      placeholder: "Enter department",
      type: "select",
      options: ["CS", "IT", "SE", "CE", "EE", "ME"],
    },
    {
      value: "role",
      title: "Role",
      placeholder: "Enter role",
      type: "select",
      options: ["Student", "Teacher", "Teacher(Department Head)"],
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

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      department: "",
      role: "",
      email: "",
      password: "",
      gender: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      if (values.role === "1") {
        CreateStudent({
          firstName: values.firstname,
          lastName: values.lastname,
          departmentId: values.department,
          email: values.email,
          password: values.password,
          gender: values.gender,
          phoneNumber: values.phoneNumber,
        });
      } else if (values.role === "2") {
        CreateTeacher({
          firstName: values.firstname,
          lastName: values.lastname,
          departmentId: values.department,
          email: values.email,
          password: values.password,
          gender: values.gender,
          phoneNumber: values.phoneNumber,
        });
      } else {
        CreateTeacherHead({
          firstName: values.firstname,
          lastName: values.lastname,
          departmentId: values.department,
          email: values.email,
          password: values.password,
          gender: values.gender,
          phoneNumber: values.phoneNumber,
        });
      }
      alert(JSON.stringify(values, null, 2));
      navigate("/AdminDashboard/AdminUsers");
    },
  });

  return (
    <div className="exam-sheet h-screen flex justify-center place-items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex flex-col gap-6 w-fit rounded-xl p-12 max-md:p-8"
      >
        <p className="text-3xl font-medium self-center mb-4">
          Enter User Details
        </p>
        {inputs.map((input) => {
          return (
            <div key={input.title} className="flex flex-row gap-6 max-md:gap-0">
              <p className="w-40">{input.title}</p>
              {input.type === "select" ? (
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
          <NavLink to={"/AdminDashboard/AdminUsers"} element={<AdminUsers />}>
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
