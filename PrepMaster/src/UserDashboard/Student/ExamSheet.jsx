import { useState, useEffect } from "react";
import LeaveExam from "../../assets/LeaveExam.svg";
import ExamPaper from "../../assets/ExamPaper.svg";
import RenderQuestions from "./RenderQuestions";

export default function ExamSheet() {

  const [SecondsLeft, setSecondsLeft] = useState(5);
  const [MinutesLeft, setMinutesLeft] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (MinutesLeft === 0 && SecondsLeft === 1) {
        clearInterval(timer);
        alert("Time Finished!!!");
      } else {
        setSecondsLeft((prevSeconds) => {
          if (prevSeconds === 1) {
            setMinutesLeft( MinutesLeft - 1);
            return 5;
          }
          return prevSeconds - 1;
        });
      }
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="exam-sheet h-screen">
      <div className="bg-white flex flex-col w-fit py-6 px-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <img src={LeaveExam} alt="Leave Exam" />
            <p>Leave Exam</p>
          </div>
          <div>
            <p>
              Time left <span className="colored-mini-text">{MinutesLeft}:{SecondsLeft}</span>
            </p>
          </div>
          <div className="px-4 py-2 exam-sheet rounded-lg flex flex-row gap-2">
            <img src={ExamPaper} alt="Exam Paper" />
            <p className="opacity-50">Question List</p>
          </div>
        </div>
    <RenderQuestions/>
      </div>
    </div>
  );
}
