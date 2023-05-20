import Button from "@mui/material/Button";
import CustomButton from "../Components/CustomButton";
import SampleQuestions from "./../assets/questions-sample.svg";
import AnswerFeedBack from "./../assets/incorrect-answer-sample.svg";
import Register from "./../assets/analytics-sample.svg";
import { NavLink } from "react-router-dom";
import Signup from "../Signup/Signup";

const demos = [
  {
    id: 1,
    title: "Simple Multiple Choice",
    description:
      "Answering questions has never been easier. Our multiple-choice format allows you to provide straightforward answers quickly and efficiently. Keep track of your progress with our handy time tracker and remaining question counter. Don't know the answer to a question? No problem! Skip it and return to it later by browsing your questions list",
    image: SampleQuestions,
  },
  {
    id: 2,
    title: "Answer Feedback",
    description:
      "Answering questions has never been easier. Our multiple-choice format allows you to provide straightforward answers quickly and efficiently. Keep track of your progress with our handy time tracker and remaining question counter. Don't know the answer to a question? No problem! Skip it and return to it later by browsing your questions list.",
    image: AnswerFeedBack,
  },
  {
    id: 3,
    title: "Register Your Institution",
    description:
      "Create exit exam assessments, share answer keys publicly, monitor student progress with a customizable dashboard, and optimize teaching methods for better results. Give your school an edge with these modern tools.",
    image: Register,
  },
];

export default function DemosContainer() {
  return (
    <div className="flex flex-col md:mt-40 max-md:mt-16 justify-between ">
      {demos.map((demo, index) => {
        const titleWords = demo.title.split(" ");
        const firstWord = titleWords[0];
        const lastWord = titleWords[titleWords.length - 1];
        const restOfTitle = titleWords.slice(1, -1).join(" ");
        const isFirstTitleColorful = index % 2 === 1;
        const isButtonJustify =
          index % 2 === 0
            ? "md:justify-start max-md:justify-center"
            : "md:justify-end max-md:justify-center";
        const containerBgColor =
          index % 2 === 0 ? "rgba(5, 191, 219, 0.08)" : "";

        return (
          <div
            key={demo.id || demos.indexOf(demo)}
            className={`flex ${
              index % 2 === 1
                ? "md:flex-row max-md:flex-col-reverse"
                : "md:flex-row-reverse max-md:flex-col-reverse"
            } px-6 md:py-32 max-md:py-16 items-center max-md:gap-6`}
            style={{ backgroundColor: containerBgColor }}
          >
            <div className="flex-shrink-0 md:w-1/2">
              <img
                src={demo.image}
                alt={demo.title}
                className="h-auto max-w-full"
              />
            </div>
            <div className="pl-4 flex flex-col">
              <h2
                className={`md:text-5xl max-md:text-2xl font-bold md:mb-16 max-md:mb-6 max-md:self-center  ${
                  isFirstTitleColorful ? "text-[#088395]" : "text-[#2e2e2e]"
                }`}
              >
                <span
                  style={{ color: isFirstTitleColorful ? "black" : "#088395" , fontWeight: "600"}}
                >
                  {firstWord}
                </span>{" "}
                {restOfTitle} {lastWord}
              </h2>
              <p className="md:mb-10 max-md:my-6 md:text-xl max-md:text-sm max-md:text-justify font-light">
                {demo.description}
              </p>
              <div className={`flex ${isButtonJustify}`}>
                <NavLink to="Signup" element={<Signup />}>
                  <CustomButton
                    text={"Try for free"}
                    padding={"0.8rem 3.4rem"}
                  />
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
