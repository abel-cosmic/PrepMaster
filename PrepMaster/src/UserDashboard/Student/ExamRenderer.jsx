import { useEffect } from "react";
import Button from "@mui/material/Button";
import StopWatch from "../../assets/StopWatch.svg";
import PencilPaper from "../../assets/PencilPaper.svg";

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
        <div className="flex flex-col gap-6 w-fit">
          <p className="text-xl font-medium w-fit">{course.CourseTitle}</p>
          <div className="grid grid-cols-2 gap-6 w-fit">
            <ExamContainer />
          </div>
          <div className="self-center">
            <Button
              variant="contained"
              style={{
                width: "fit-content",
                backgroundColor: "#088395",
                borderRadius: "0.3rem",
                padding: "0.5rem 1rem",
              }}
              disableElevation
              sx={{ textTransform: "none" }}
            >
              <p className="text-xs text-white">Load More</p>
            </Button>
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
          className="container w-fit pr-10 pl-4 py-4 flex flex-col gap-4"
        >
          <p className="text-lg font-medium">{exam.ExamTitle}</p>
          <div className="exam-detail flex flex-row gap-2 ">
            <div className="flex flex-row gap-2">
              <img src={StopWatch} alt="Time" className="" />
              <p className="text-xs w-16 self-center">{exam.duration}</p>
            </div>
            <div className="flex flex-row gap-2">
              <img src={PencilPaper} alt="Question amount" className="" />
              <p className="text-xs w-32 self-center">{exam.amount}</p>
            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: "#088395", borderRadius: "0.3rem" }}
              sx={{ textTransform: "none", width: "6rem", height: "2rem" }}
              disableElevation
            >
              <p className="text-xs text-white">Start</p>
            </Button>
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
