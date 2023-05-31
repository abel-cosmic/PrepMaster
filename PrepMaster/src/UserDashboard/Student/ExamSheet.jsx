import { useState, useEffect } from "react";
import LeaveExam from "../../assets/LeaveExam.svg";
import ExamPaper from "../../assets/ExamPaper.svg";
import RenderQuestions from "./RenderQuestions";
import { NavLink } from "react-router-dom";
import StudentExam from "./StudentExam";

export default function ExamSheet() {
  const [SecondsLeft, setSecondsLeft] = useState(59);
  const [MinutesLeft, setMinutesLeft] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      if (MinutesLeft === 0 && SecondsLeft === 1) {
        clearInterval(timer);
        alert("Time Finished!!!");
      } else {
        setSecondsLeft((prevSeconds) => {
          if (prevSeconds === 1) {
            setMinutesLeft(MinutesLeft - 1);
            return 5;
          }
          return prevSeconds - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="exam-sheet h-screen flex justify-center place-items-center">
      <div className="bg-white flex flex-col w-1/2 rounded-xl question gap-8 h-fit p-12">
        <div className="flex flex-row justify-between">
          <NavLink to="/StudentDashboard/StudentExam" element={<StudentExam />}>
            <div className="flex flex-row self-center gap-2">
              <img src={LeaveExam} alt="Leave Exam" />
              <p>Leave Exam</p>
            </div>
          </NavLink>
          <div className="self-center">
            <p>
              Time left{" "}
              <span className="colored-mini-text">
                {MinutesLeft}:{SecondsLeft}
              </span>
            </p>
          </div>
          <div className="px-4 py-2 w-44 exam-sheet rounded-lg flex flex-row gap-4">
            <img src={ExamPaper} alt="Exam Paper" />
            <p className="opacity-50">Question List</p>
          </div>
        </div>
        <RenderQuestions />
      </div>
    </div>
  );
}
