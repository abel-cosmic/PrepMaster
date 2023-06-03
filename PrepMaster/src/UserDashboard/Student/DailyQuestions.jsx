import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import StopWatch from "../../assets/StopWatch.svg";
import PencilPaper from "../../assets/PencilPaper.svg";
import CustomButton from "../../Components/CustomButton";
import { NavLink } from "react-router-dom";
import ExamSheet from "./ExamSheet";
import { useCourse } from "../../Logic/CourseContext";

export default function DailyQuestions() {
  const url = "http://localhost:8080/api/bundles";
  const [exams, setExams] = useState([]);
  const { setCourse } = useCourse();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((bundles) => {
        setExams(bundles);
      });
  }, []);

  // console.log(exams[0].name);

  return exams.map((exam) => {
    return (
      <div className="container md:w-5/12 pr-10 pl-4 py-4 flex flex-col gap-4">
        <p className="text-lg font-medium w-fit">{exam.name}</p>
        <p className="text-base font-normal">{exam.description}</p>
        <div className="exam-detail flex flex-row justify-between gap-2 ">
          <div className="flex-row flex justify-between gap-6">
            <div className="flex flex-row gap-2 w-fit">
              <img src={StopWatch} alt="Time" className="" />
              <p className="text-xs self-center">{exam.timeAllowed}</p>
            </div>
            <div className="flex flex-row gap-2">
              <img src={PencilPaper} alt="Question amount" className="" />
              <p className="text-xs self-center">{exam.questions.length}</p>
            </div>
          </div>
          <NavLink
            to="/ExamSheet"
            element={<ExamSheet />}
            onClick={() => setCourse(exam.id)}
          >
            <CustomButton
              text={"Start"}
              padding={"0.5rem 1.5rem"}
              variant={"contained"}
              className="self-end"
            />
          </NavLink>
        </div>
      </div>
    );
  });
}
