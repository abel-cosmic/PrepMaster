import { useLocation } from "react-router-dom";
import MostAchievingDepartment from "./MostAchiebingDepartment";
import OverViewContainer from "./OverViewContainer";
import ProgressReport from "./ProgressReport";
import { useEffect, useState } from "react";

export default function TeacherDashboard() {
  const location = useLocation();
  const { email } = location.state;
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
        <p className="text-xl font-medium">Dashboard</p>
      </div>
      <p>
        Hello, {name} -{" "}
        <span className="opacity-50">Let's get some work done</span>
      </p>
      <div className="flex flex-row gap-6">
        <OverViewContainer />
      </div>
      <ProgressReport />
      <div className="flex flex-row gap-6">
        <MostAchievingDepartment />
        <MostAchievingDepartment />
      </div>
    </div>
  );
}
