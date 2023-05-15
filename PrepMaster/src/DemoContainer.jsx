import Button from "@mui/material/Button";
import CustomButton from "./Components/CustomButton";
import SampleQuestions from "./assets/questions-sample.svg";
import AnswerFeedBack from "./assets/incorrect-answer-sample.svg";
import Register from "./assets/analytics-sample.svg";

const demos = [
    {
        id: 1,
        title: "Simple Multiple Choice",
        description:"Answering questions has never been easier. Our multiple-choice format allows you to provide straightforward answers quickly and efficiently. Keep track of your progress with our handy time tracker and remaining question counter. Don't know the answer to a question? No problem! Skip it and return to it later by browsing your questions list",
        image: SampleQuestions
    },
    {
        id: 2,
        title: "Answer Feedback",
        description:"Answering questions has never been easier. Our multiple-choice format allows you to provide straightforward answers quickly and efficiently. Keep track of your progress with our handy time tracker and remaining question counter. Don't know the answer to a question? No problem! Skip it and return to it later by browsing your questions list.",
        image: AnswerFeedBack
    },
    {
        id: 3,
        title: "Register Your Institution",
        description:"Create exit exam assessments, share answer keys publicly, monitor student progress with a customizable dashboard, and optimize teaching methods for better results. Give your school an edge with these modern tools.",
        image:Register
    }
];

export default function DemosContainer() {
    return (
      <div className="flex flex-col justify-center mt-40">
        {demos.map((demo, index) => {
          const titleWords = demo.title.split(" ");
          const firstWord = titleWords[0];
          const lastWord = titleWords[titleWords.length - 1];
          const restOfTitle = titleWords.slice(1, -1).join(" ");
          const isFirstTitleColorful = index % 2 === 1;
          const isButtonJustify = index % 2 === 0 ? "justify-start" : "justify-end";
          const containerBgColor = index % 2 === 0 ? "rgba(5, 191, 219, 0.08)" : "";
          
          return (
            <div
              key={demo.id || demos.indexOf(demo)}
              className={`flex ${
                index % 2 === 1 ? "flex-row" : "flex-row-reverse"
              } p-4 items-center p-52`}
              style={{ backgroundColor: containerBgColor } }
            >
              <div className="flex-shrink-0 w-1/2">
                <img src={demo.image} alt={demo.title} className="h-auto max-w-full" />
              </div>
              <div className="pl-4 flex flex-col">
                <h2
                  className="text-2xl font-bold mb-16"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: isFirstTitleColorful ? "#088395" : "black",
                  }}
                >
                  <span style={{ color: isFirstTitleColorful ? "black" : "#088395" }}>
                    {firstWord}
                  </span>{" "}
                  {restOfTitle} {lastWord}
                </h2>
                <p className="mb-10">{demo.description}</p>
                <div className={`flex ${isButtonJustify}`}>
                  <CustomButton text={"Try for free"} padding={"0.7rem 1.7rem"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  