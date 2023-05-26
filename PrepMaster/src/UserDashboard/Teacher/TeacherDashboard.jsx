import { useLocation } from "react-router-dom";
import MostAchievingDepartment from "./MostAchiebingDepartment";
import OverViewContainer from "./OverViewContainer";
import ProgressReport from "./ProgressReport";
import { useContext, useEffect, useState } from "react";
import TeacherContext from "../../Logic/UserContext";
import UserContext from "../../Logic/UserContext";

export default function TeacherDashboard() {
  const user = useContext(UserContext);
  const email = user?.email;
  console.log(email);
  const [name, setName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/teachers")
      .then((response) => response.json())
      .then((teachers) => {
        teachers.some((teacher) => {
          if (teacher.email === email) {
            console.log(teacher.email);
            setName(teacher.firstName);
            setDepartmentId(teacher.departmentId);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4 mt-10 w-fit" id="student-dashboard">
      <div>
        <p className="md:text-xl max-md:text-2xl font-medium">Dashboard</p>
      </div>
      <p>
        Hello, {name} -{" "}
        <span className="opacity-50">Let's get some work done</span>
      </p>
      <div className="flex md:flex-row max-md:flex-col gap-6">
        <OverViewContainer />
      </div>
      <ProgressReport />
      <div className="flex md:flex-row max-md:flex-col gap-6">
        <MostAchievingDepartment />
        <MostAchievingDepartment />
      </div>
    </div>
  );
}
