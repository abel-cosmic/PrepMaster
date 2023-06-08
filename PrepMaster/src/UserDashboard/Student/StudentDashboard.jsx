import OverViewContainer from "./OverViewContainer";
import DailyQuestions from "./DailyQuestions";
import ProgressReport from "./ProgressReport";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEmail } from "../../Logic/TeacherContext";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function StudentDashboard() {
  const { email } = useEmail();
  console.log(email);
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
      <div
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <p className="text-xl font-medium max-md:text-2xl max-md:font-semibold">
          Dashboard
        </p>
      </div>
      <p
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        Hello, {name} -{" "}
        <span className="opacity-50">Let's get some work done</span>
      </p>
      <div className="flex flex-row gap-6 justify-between w-full max-md:flex-col">
        <OverViewContainer />
      </div>
      <p
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="400"
        className="text-lg font-medium mt-6 max-md:text-2xl max-md:font-semibold"
      >
        Daily Questions
      </p>
      <div className="flex flex-row gap-6 w-full justify-between max-md:flex-col">
        <DailyQuestions />
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <ProgressReport />
      </div>
    </div>
  );
}
