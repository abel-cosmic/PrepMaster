import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminUsers from "./AdminUsers";

export default function EditUser() {
  //take a prop that passes all the users info here
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
      options: ["Student", "Teacher"],
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
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/AdminUsers");
    },
  });

  return (
    <div className="exam-sheet h-screen flex justify-center place-items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex flex-col gap-6 w-fit rounded-xl p-12"
      >
        <p className="text-3xl font-medium self-center mb-4">
          Edit User Details
        </p>
        {inputs.map((input) => {
          return (
            <div key={input.title} className="flex flex-row gap-6">
              <p className="w-44">{input.title}</p>
              {input.type === "select" ? (
                <select
                  className="container w-[24.5rem] flex pl-4 pr-10 py-2"
                  name={input.value}
                  id={input.title}
                  onBlur={formik.handleChange}
                  required
                >
                  {input.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={input.type}
                  className="container w-fit flex pl-4 pr-10 py-2"
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
