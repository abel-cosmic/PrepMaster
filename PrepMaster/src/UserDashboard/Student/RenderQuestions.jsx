import { Button } from "@mui/material";
import CustomButton from "../../Components/CustomButton.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RenderQuestions({ CourseTitle, ExamTitle }) {
  const questions = [
    {
      question: "What is the capital of France?",
      choice: ["London", "Addis Ababa", "Paris", "Venice"],
      answer: "Paris",
    },
    {
      question: "What is the capital of Ethiopia?",
      choice: ["London", "Addis Ababa", "Paris", "Venice"],
      answer: "Addis Ababa",
    },
    {
      question: "What is the capital of Britin?",
      choice: ["London", "Addis Ababa", "Paris", "Venice"],
      answer: "London",
    },
    {
      question: "What is the capital of Italy?",
      choice: ["London", "Addis Ababa", "Paris", "Rome"],
      answer: "Rome",
    },
  ];

  const handleCheck = (e) => {
    console.log(e.target.value);
    // Update the selectedChoice state for the specific choice
    setSelectedChoice(e.target.value);
  };

  const [score, setScore] = useState(0);
  const [questionNumber, setQustionNumber] = useState(questions.length - 1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.choice.value === questions[questionNumber].answer) {
      setScore(score + 1);
      console.log(score);
    } else {
      console.log("Incorrect");
      console.log(score);
    }
    setQustionNumber(questionNumber - 1);
    setSelectedChoice("");
    if (questionNumber - 1 < 0) {
      //send data to the server
      //navigate to score display section
      navigate("/displayScore", { state: { CourseTitle, ExamTitle, score } });
    }
  };

  const [selectedChoice, setSelectedChoice] = useState("");

  return (
    <div className="flex flex-col gap-6">
      <p className="text-xl font-medium">
        {questions[questionNumber].question}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {questions[questionNumber].choice.map((choice) => (
          <div
            key={choice}
            className="flex flex-row gap-4 px-4 py-2 rounded-md"
            style={{
              backgroundColor:
                selectedChoice === choice ? "rgba(8, 131, 149, 0.1)" : "white",
            }}
          >
            <input
              type="radio"
              name="choice"
              value={choice}
              onClick={handleCheck}
            />
            <label>{choice}</label>
          </div>
        ))}
        <div className="flex flex-row gap-6 justify-end">
          <Button
            variant="text"
            sx={{ textTransform: "none", color: "#2e2e2e", fontWeight: "400" }}
          >
            Skip
          </Button>
          <input type="submit" value="Next" className="submit-btn" />
        </div>
      </form>
    </div>
  );
}
