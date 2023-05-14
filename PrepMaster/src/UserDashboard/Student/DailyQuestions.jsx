import { useEffect } from "react";
import Button from "@mui/material/Button";
import StopWatch from "../../assets/StopWatch.svg";
import PencilPaper from "../../assets/PencilPaper.svg";
import CustomButton from "../../Components/CustomButton";
import { NavLink } from "react-router-dom";
import ExamSheet from "./ExamSheet";

export default function DailyQuestions() {
  const url = "questions data here";
  const data = [
    {
      title: "Exam Name1",
      duration: "X mins",
      amount: "X questions",
    },
    {
      title: "Exam Name2",
      duration: "X mins",
      amount: "X questions",
    },
  ];
  //   useEffect(() => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // fetch the first two datas only
  //       });
  //   }, []);

  return data.map((item) => {
    return (
      <div
        key={item.title}
        className="container w-fit pr-10 pl-4 py-4 flex flex-col gap-4"
      >
        <p className="text-lg font-medium">{item.title}</p>
        <div className="exam-detail flex flex-row gap-2 ">
          <div className="flex flex-row gap-2">
            <img src={StopWatch} alt="Time" className="" />
            <p className="text-xs w-16 self-center">{item.duration}</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src={PencilPaper} alt="Question amount" className="" />
            <p className="text-xs w-32 self-center">{item.amount}</p>
          </div>
          <NavLink to="/ExamSheet" element={<ExamSheet />}>
            <CustomButton
              text={"Start"}
              padding={"0.5rem 1.5rem"}
              variant={"contained"}
            />
          </NavLink>
        </div>
      </div>
    );
  });
}
