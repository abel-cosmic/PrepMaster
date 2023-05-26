import { useEffect } from "react";
import Button from "@mui/material/Button";
import StopWatch from "../../assets/StopWatch.svg";
import PencilPaper from "../../assets/PencilPaper.svg";
import CustomButton from "../../Components/CustomButton";
import { NavLink } from "react-router-dom";
import ExamSheet from "../Student/ExamSheet";
import EditExam from "./EditExam";

export default function ExamRenderer() {
  const url = "Course url here";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // fetch the datas then append them to courses
        //append the entire object
      });
  }, []);
  const courses = [
    {
      CourseTitle: "Course Name 1",
      ExamTitle: "Exam Name 1",
      duration: "X mins",
      amount: "X questions",
    },
    {
      CourseTitle: "Course Name 2",
      ExamTitle: "Exam Name 2",
      duration: "X mins",
      amount: "X questions",
    },
    {
      CourseTitle: "Course Name 3",
      ExamTitle: "Exam Name 3",
      duration: "X mins",
      amount: "X questions",
    },
    {
      CourseTitle: "Course Name 4",
      ExamTitle: "Exam Name 4",
      duration: "X mins",
      amount: "X questions",
    },
  ]; // sample data

  const CourseContainer = () => {
    return courses.map((course) => {
      return (
        <div className="flex flex-col gap-6 w-full">
          <p className="text-xl font-medium w-full">{course.CourseTitle}</p>
          <div className="grid grid-cols-2 gap-10 w-full max-md:flex max-md:flex-col ">
            <ExamContainer />
          </div>
          <div className="self-center">
            <CustomButton text={"Load More"} padding={"0.5rem 2rem"} />
          </div>
        </div>
      );
    });
  };

  const ExamContainer = () => {
    return courses.map((exam) => {
      return (
        <div
          key={exam.ExamTitle}
          className="container w-full pr-10 pl-4 py-4 flex flex-col gap-4"
        >
          <p className="text-lg font-medium">{exam.ExamTitle}</p>
          <div className="exam-detail flex flex-row justify-between ">
           <div className="flex  flex-row gap-2 ">
           <div className="flex flex-row gap-2">
              <img src={StopWatch} alt="Time" className="" />
              <p className="text-xs w-16 self-center">{exam.duration}</p>
            </div>
            <div className="flex flex-row gap-2">
              <img src={PencilPaper} alt="Question amount" className="" />
              <p className="text-xs w-32 self-center">{exam.amount}</p>
            </div>
           </div>
            <NavLink
              to="/ExamSheet"
              element={
                <EditExam
                  CourseTitle={exam.CourseTitle}
                  ExamTitle={exam.ExamTitle}
                />
              }
            >
              <CustomButton text={"Edit"} padding={"0.5rem 1.5rem"} />
            </NavLink>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <CourseContainer />
    </div>
  );
}
