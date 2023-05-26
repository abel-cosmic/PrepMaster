import { Button, Modal } from "@mui/material";
import CustomButton from "../../Components/CustomButton.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IncorrectAnswer from "./IncorrectAnswer.jsx";

export default function RenderQuestions({ CourseTitle, ExamTitle }) {
  const questions = [
    {
      question: "What is the capital of France?",
      choice: ["London", "Addis Ababa", "Paris", "Venice"],
      answer: "Paris",
      description: "You should already know this answer bruuhhhhhhhhh 💀💀💀",
    },
    {
      question: "What is the capital of Ethiopia?",
      choice: ["London", "Addis Ababa", "Paris", "Venice"],
      answer: "Addis Ababa",
      description: "You should already know this answer bruuhhhhhhhhh 💀💀💀",
    },
    {
      question: "What is the capital of Britin?",
      choice: ["London", "Addis Ababa", "Paris", "Venice"],
      answer: "London",
      description: "You should already know this answer bruuhhhhhhhhh 💀💀💀",
    },
    {
      question: "What is the capital of Italy?",
      choice: ["London", "Addis Ababa", "Paris", "Rome"],
      answer: "Rome",
      description: "You should already know this answer bruuhhhhhhhhh 💀💀💀",
    },
  ];

  const handleCheck = (e) => {
    console.log(e.target.value);
    setSelectedChoice(e.target.value);
  };

  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(questions.length - 1);
  const [showIncorrectAnswer, setShowIncorrectAnswer] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.choice.value === questions[questionNumber].answer) {
      setScore(score + 1);
      console.log(score);
    } else {
      console.log("Incorrect");
      console.log(score);
      setShowIncorrectAnswer(true); // Show the incorrect answer modal
      return; // Exit the handleSubmit function
    }
    setQuestionNumber(questionNumber - 1);
    setSelectedChoice("");
    if (questionNumber - 1 < 0) {
      navigate("/displayScore", { state: { CourseTitle, ExamTitle, score } });
    }
  };

  const [selectedChoice, setSelectedChoice] = useState("");

  const handleCloseModal = () => {
    setShowIncorrectAnswer(false); // Hide the incorrect answer modal
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Question */}
      <p className="text-xl font-medium">
        {questions[questionNumber].question}
      </p>

      {/* Choices */}
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
            sx={{
              textTransform: "none",
              color: "#2e2e2e",
              fontWeight: "400",
              borderRadius: "0.3rem",
              padding: "0.8rem 3rem"
            }}
          >
            Skip
          </Button>
          <input type="submit" value="Next" className="submit-btn" />
        </div>
      </form>

      {/* Incorrect Answer Modal */}
      <Modal open={showIncorrectAnswer} onClose={handleCloseModal}>
        <IncorrectAnswer
          open={showIncorrectAnswer}
          onClose={() => setShowIncorrectAnswer(false)}
          answer={questions[questionNumber].answer}
          description={questions[questionNumber].description}
        />
      </Modal>
    </div>
  );
}
