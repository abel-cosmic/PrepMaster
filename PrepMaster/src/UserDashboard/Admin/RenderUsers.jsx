import { NavLink } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";
import DeleteButton from "../../Components/DeleteButton";
import Filter from "../../assets/Filter.svg";
import search from "../../assets/search.svg";
import EditUser from "./EditUser";
import message from "../../assets/mail.svg";
import { useEffect, useState } from "react";
import { useEmail } from "../../Logic/TeacherContext";
import { useUserData } from "../../Logic/UserDataContext";
import { Box } from "@mui/material";
import { DeleteUser } from "../../Logic/DeleteUser";
export default function RenderUsers() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const { setUserData } = useUserData();

  const [deletionStatus, setDeletionStatus] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentResponse = await fetch("http://localhost:8080/api/students");
      const studentData = await studentResponse.json();
      setStudents(studentData);
    };
    fetchStudents();

    const fetchTeachers = async () => {
      const teacherResponse = await fetch("http://localhost:8080/api/teachers");
      const teacherData = await teacherResponse.json();
      setTeachers(teacherData);
    };
    fetchTeachers();
  }, [deletionStatus]);

  const handleDeleteUser = async (id, type) => {
    await DeleteUser({ id, type });
    setDeletionStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className="flex flex-col gap-6 max-md:gap-4">
      <div className="flex md:flex-row max-md:flex-col md:gap-24 max-md:gap-6">
        <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-full md:hidden">
          <img src={search} alt="search" />
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-4 md:hidden">
          <p className="self-center opacity-50">Filter</p>
          <img src={Filter} alt="Filter" />
        </div>
      </div>
      <div className="flex flex-row justify-between pb-4 gap-2 bottom-styled max-md:hidden">
        <p className="self-center opacity-50">Name</p>
        <p className="self-center opacity-50">Email</p>
        <p className="self-center opacity-50">User Type</p>
        <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-fit max-md:hidden">
          <img src={search} alt="search" />
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-4 max-md:hidden">
          <p className="self-center opacity-50">Filter</p>
          <img src={Filter} alt="Filter" />
        </div>
      </div>
      {students.map((student) => {
        return (
          <div
            key={student.email}
            className="flex flex-row gap-20 pb-4 bottom-styled max-md:hidden"
          >
            <p className="md:w-44 self-center text-sm flex flex-row gap-20">
              <span className="md:hidden">Name</span>
              {student.firstName + " " + student.lastName}
            </p>
            <p className="md:w-64 self-center text-sm flex flex-row gap-20">
              <span className="md:hidden mr-4">Email</span>
              {student.email}
            </p>
            <p className="md:w-52 self-center text-sm flex flex-row gap-20">
              <span className="md:hidden">User Type</span>
              Student
            </p>
            <div className="flex-row flex gap-10 max-md:hidden">
              <NavLink
                to="/edituser"
                element={<EditUser />}
                onClick={() => {
                  setUserData(student);
                }}
              >
                <CustomButton text={"Edit"} padding={"0.5rem 2rem"} />
              </NavLink>
              <Box onClick={() => handleDeleteUser(student.id, "students")}>
                <DeleteButton text={"Delete"} padding={"0.5rem 1.5rem"} />
              </Box>
            </div>
          </div>
        );
      })}
      {teachers.map((teacher) => {
        return (
          <div
            key={teacher.email}
            className="flex flex-row gap-20 pb-4 bottom-styled max-md:hidden"
          >
            <p className="md:w-44 self-center text-sm flex flex-row gap-20">
              <span className="md:hidden">Name</span>
              {teacher.firstName + " " + teacher.lastName}
            </p>
            <p className="md:w-64 self-center text-sm flex flex-row gap-20">
              <span className="md:hidden mr-4">Email</span>
              {teacher.email}
            </p>
            <p className="md:w-52 self-center text-sm flex flex-row gap-20">
              <span className="md:hidden">User Type</span>
              {teacher.departmentHead === true
                ? "Teacher (Department Head)"
                : "Teacher"}
            </p>
            <div className="flex flex-row gap-10 max-md:hidden">
              <NavLink
                to="/edituser"
                element={<EditUser />}
                onClick={() => {
                  setUserData(teacher);
                }}
              >
                <CustomButton text={"Edit"} padding={"0.5rem 2rem"} />
              </NavLink>
              <Box onClick={() => handleDeleteUser(teacher.id, "teachers")}>
                <DeleteButton text={"Delete"} padding={"0.5rem 1.5rem"} />
              </Box>
            </div>
          </div>
        );
      })}
    </div>
  );
}
