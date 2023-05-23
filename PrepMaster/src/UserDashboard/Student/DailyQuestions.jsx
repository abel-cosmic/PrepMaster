import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import StopWatch from "../../assets/StopWatch.svg";
import PencilPaper from "../../assets/PencilPaper.svg";
import CustomButton from "../../Components/CustomButton";
import { NavLink } from "react-router-dom";
import ExamSheet from "./ExamSheet";

export default function DailyQuestions() {
  const url = "http://localhost:8080/api/bundles";
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");

  const data = [
    {
      title: name1,
      duration: time1,
      description: description1,
      amount: "50 items",
    },
    {
      title: name2,
      duration: time2,
      description: description2,
      amount: "50 items",
    },
  ];

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((bundles) => {
        bundles.some((bundle) => {
          if (bundle.id === 1) {
            setName1(bundle.name);
            setDescription1(bundle.description);
            setTime1(bundle.timeAllowed);
          } else if (bundle.id === 2) {
            setName2(bundle.name);
            setDescription2(bundle.description);
            setTime2(bundle.timeAllowed);
          }
        });
      });
  }, []);

  return data.map((item) => {
    return (
      <div
        key={item.title}
        className="container w-full pr-10 pl-4 py-4 flex flex-col gap-4"
      >
        <p className="text-lg font-medium">{item.title}</p>
        <p className="text-base font-normal">{item.description}</p>
        <div className="exam-detail flex flex-row justify-between gap-2 ">
          <div className="flex-row flex justify-between">
            <div className="flex flex-row gap-2 w-full">
              <img src={StopWatch} alt="Time" className="" />
              <p className="text-xs self-center">{item.duration}</p>
            </div>
            <div className="flex flex-row gap-2">
              <img src={PencilPaper} alt="Question amount" className="" />
              <p className="text-xs self-center">{item.amount}</p>
            </div>
          </div>
          <NavLink to="/ExamSheet" element={<ExamSheet />}>
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
