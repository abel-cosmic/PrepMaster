import OverViewContainer from "./OverViewContainer";
import DailyQuestions from "./DailyQuestions";
import ProgressReport from "./ProgressReport";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function StudentDashboard() {
  const location = useLocation();
  const { email } = location.state;
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/students", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((students) => {
        students.some((student) => {
          if (student.email === email) {
            console.log(student.email);
            setName(student.firstName);
            setDepartment(student.department);
            console.log(student.firstName);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [email]);
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
      <p className="text-lg font-medium mt-6">Daily Questions</p>
      <div className="flex flex-row gap-6">
        <DailyQuestions />
      </div>
      <ProgressReport />
    </div>
  );
}
