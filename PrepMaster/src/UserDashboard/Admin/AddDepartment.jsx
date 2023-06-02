import { Button } from "@mui/material";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import AdminDepartment from "./AdminDepartment";
import { useEffect, useState } from "react";
import CreateDepartment from "../../Logic/CreateDepartment";
import { useEmail } from "../../Logic/TeacherContext";

export default function AddDepartment() {
  const [teachers, setTeachers] = useState([{}]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const { email } = useEmail();

  console.log(email);

  useEffect(() => {
    const fetchTeachers = async () => {
      const teacherResponse = await fetch("http://localhost:8080/api/teachers");
      const teacherData = await teacherResponse.json();
      const departmentHeadTeachers = teacherData.filter(
        (teacher) => teacher.departmentHead === true
      );
      setTeachers(departmentHeadTeachers);
    };
    fetchTeachers();
  }, []);

  // console.log(teachers);

  const inputs = [
    {
      value: "name",
      title: "Department Name",
      placeholder: "Enter department name",
      type: "text",
    },
    {
      value: "dean",
      title: "Department Dean",
      placeholder: "Select Dean",
      type: "select",
      options: teachers ? teachers.map((teacher) => teacher.firstName) : [],
    },
    {
      value: "description",
      title: "Description",
      placeholder: "Enter department description",
      type: "text",
    },
  ];

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      dean: "",
      description: "",
    },
    onSubmit: (values) => {
      CreateDepartment(values)
        .then(() => {
          alert(JSON.stringify(values, null, 2));
          navigate("/AdminDashboard/AdminDepartment");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  return (
    <div className="exam-sheet h-screen flex justify-center place-items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex flex-col gap-6 w-fit rounded-xl p-12 max-md:p-8 max-md:mx-20"
      >
        <p className="text-3xl font-medium self-center mb-4">
          Enter Department Details
        </p>
        <div className="flex flex-col  gap-6 ">
          {inputs.map((input) => {
            return (
              <div
                key={input.title}
                className="flex flex-row justify-between gap-6"
              >
                <p className="w-40 ">{input.title}</p>
                {input.type === "select" ? (
                  <select
                    className="container bg-white w-[24.5rem] flex pl-4 pr-10 py-2 max-md:w-[14rem] "
                    name={input.value}
                    id={input.title}
                    onBlur={formik.handleChange}
                    required
                  >
                    {input.options.map((option, index) => (
                      <option
                        key={option}
                        value={setSelectedTeacher(teachers[index].departmentId)}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={input.type}
                    className="container w-[24.5rem] flex pl-4 pr-10 py-2 "
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
        </div>

        <div className="flex flex-row gap-6 justify-end">
          <NavLink
            to={"/AdminDashboard/AdminDepartment"}
            element={<AdminDepartment />}
          >
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
