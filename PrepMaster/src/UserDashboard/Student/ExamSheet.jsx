import { useState, useEffect } from "react";
import LeaveExam from "../../assets/LeaveExam.svg";
import ExamPaper from "../../assets/ExamPaper.svg";
import RenderQuestions from "./RenderQuestions";
import { NavLink } from "react-router-dom";
import StudentExam from "./StudentExam";
import QuestionList from "./QuestionList";

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
    <div className="exam-sheet h-screen flex justify-center place-items-center max-md:py-10">
      <div className="bg-white flex flex-col md:w-1/2 max-md:w-5/6 max-md:justify-between rounded-xl question gap-8 md:h-fit md:p-12 max-md:px-6 max-md:py-12 ">
        <div className="flex flex-row justify-between">
          <NavLink
            to="/StudentDashboard/StudentExam"
            element={<StudentExam />}
            className="self-center"
          >
            <div className="flex flex-row self-center gap-2">
              <img src={LeaveExam} alt="Leave Exam" />
              <p className="max-md:text-sm">Leave Exam</p>
            </div>
          </NavLink>
          <div className="max-md:hidden self-center">
            <p className="max-md:text-sm">
              Time left{" "}
              <span className="colored-mini-text">
                {MinutesLeft}:{SecondsLeft}
              </span>
            </p>
          </div>
          <NavLink to="/QuestionList" element={<QuestionList />}>
            <div className="px-4 py-2 md:w-44 exam-sheet rounded-lg flex flex-row gap-4">
              <img src={ExamPaper} alt="Exam Paper" className="" />
              <p className="opacity-50 max-md:text-sm">Question List</p>
            </div>
          </NavLink>
        </div>
        <div className="md:hidden self-center">
          <p className="max-md:text-sm">
            Time left{" "}
            <span className="colored-mini-text">
              {MinutesLeft}:{SecondsLeft}
            </span>
          </p>
        </div>
        <RenderQuestions />
      </div>
    </div>
  );
}
