import { NavLink } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";
import DeleteButton from "../../Components/DeleteButton";
import Filter from "../../assets/Filter.svg";
import search from "../../assets/search.svg";
import EditUser from "./EditUser";
import EditDepartment from "./EditDepartment";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DeleteUser } from "../../Logic/DeleteUser";

export default function RenderDepartments() {
  const [departments, setDepartments] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [deletionStatus, setDeletionStatus] = useState(false);

  const handleDeleteUser = async (id, type) => {
    await DeleteUser({ id, type });
    setDeletionStatus((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      const departmentResponse = await fetch(
        "http://localhost:8080/api/departments"
      );
      const departmentData = await departmentResponse.json();
      setDepartments(departmentData);
    };
    fetchDepartments();
    const fetchTeachers = async () => {
      const teacherResponse = await fetch("http://localhost:8080/api/teachers");
      const teacherData = await teacherResponse.json();
      const departmentHeadTeachers = teacherData.filter(
        (teacher) => teacher.departmentHead === true
      );
      setTeachers(departmentHeadTeachers);
    };
    fetchTeachers();
  }, [deletionStatus]);

  // console.log(departments);
  // console.log(teachers);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex md:flex-row max-md:flex-col justify-between pb-4 max-md:gap-4 md:bottom-styled">
        <p className="self-center opacity-50 max-md:hidden">Name</p>
        <p className="self-center opacity-50 max-md:hidden">Dean</p>
        <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-fit">
          <img src={search} alt="search" />
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-4">
          <p className="self-center opacity-50">Filter</p>
          <img src={Filter} alt="Filter" />
        </div>
      </div>
      {departments.map((department) => {
        return (
          <div
            key={department.name}
            className="flex flex-row gap-24 bottom-styled pb-6 max-md:hidden"
          >
            <p className="w-64 self-center">{department.name}</p>
            {teachers.map((teacher) => {
              if (teacher.departmentId === department.id) {
                return <p className="w-64 self-center">{teacher.firstName}</p>;
              }
            })}
            <NavLink to="/editDepartment" element={<EditDepartment />}>
              <CustomButton text={"Edit"} padding={"0.5rem 2rem"} />
            </NavLink>
            <DeleteButton text={"Delete"} padding={"0.5rem 1.5rem"} />
          </div>
        );
      })}
      {departments.map((department) => {
        return (
          <div
            key={department.name}
            className="max-md:visible md:hidden px-6  border border-gray-200 p-8"
          >
            <div className="text-xl  font-semibold flex flex-row gap-4 my-2">
              {department.name}
            </div>
            <div className="text-base font-medium flex flex-row gap-4 my-2">
              {department.dean}
            </div>
            <div className="flex-row flex justify-between max-md:visible my-2">
              <NavLink to="/edituser" element={<EditUser />}>
                <CustomButton text={"Edit"} padding={"0.8rem 3.5rem"} />
              </NavLink>
              <Box
                onClick={() => handleDeleteUser(department.id, "departments")}
              >
                <DeleteButton text={"Delete"} padding={"0.8rem 3.4rem"} />
              </Box>
            </div>
          </div>
        );
      })}
    </div>
  );
}
