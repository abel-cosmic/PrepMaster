import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminUsers from "./AdminUsers";
import { useUserData } from "../../Logic/UserDataContext";
import UpdateStudent from "../../Logic/UpdateStudent";
import UpdateTeacher from "../../Logic/UpdateTeacher";

export default function EditUser() {
  const { userData } = useUserData();
  const [departments, setDepartments] = useState();
  console.log(userData);

  useEffect(() => {
    const fetchDepartments = async () => {
      const departmentResponse = await fetch(
        "http://localhost:8080/api/departments"
      );
      const departmentData = await departmentResponse.json();
      setDepartments(departmentData);
    };
    fetchDepartments();
  }, []);

  console.log(departments);

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
      value: "departmentId",
      title: "Department",
      placeholder: "Enter department",
      type: "select",
      options: departments
        ? departments.map((department) => department.name)
        : [],
    },
    {
      value: "gender",
      title: "Gender",
      placeholder: "Enter gender",
      type: "select",
      options: ["Male", "Female", "Retarded"],
    },
    {
      value: "phoneNumber",
      title: "Phone Number",
      placeholder: "Enter phone number",
      type: "text",
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
      type: "text",
    },
  ];

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: userData.id,
      firstname: userData.firstName,
      lastname: userData.lastName,
      departmentId: "",
      email: userData.email,
      password: userData.password,
      gender: userData.gender,
      phoneNumber: userData.phoneNumber,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      if (userData.departmentHead === undefined) {
        UpdateStudent(values)
          .then(() => {
            alert("Student data successfully updated");
            navigate("/AdminDashboard/AdminUsers");
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        const updatedValues = {
          ...values,
          departmentHead: userData.departmentHead,
        };

        UpdateTeacher(updatedValues)
          .then(() => {
            alert("Teacher data successfully updated");
            navigate("/AdminDashboard/AdminUsers");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  });

  return (
    <div className="exam-sheet h-screen flex justify-center place-items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex flex-col gap-6 w-fit rounded-xl p-12 max-md:px-6"
      >
        <p className="md:text-3xl max-md:text-2xl font-medium self-center mb-4">
          Edit User Details
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
              {input.type === "select" ? (
                <select
                  className="container  bg-white flex pl-4 pr-10 py-2 max-md:pr-0 max-md:w-[16rem]"
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
                  className="container w-full flex pl-4 pr-10 py-2 max-md:w-[16rem]"
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

        <div className="flex flex-row gap-6 md:justify-end max-md:justify-center">
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
