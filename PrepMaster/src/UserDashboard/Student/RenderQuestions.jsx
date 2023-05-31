import { Button, Modal } from "@mui/material";
import CustomButton from "../../Components/CustomButton.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IncorrectAnswer from "./IncorrectAnswer.jsx";
import { useCourse } from "../../Logic/CourseContext.jsx";
import { useEmail } from "../../Logic/TeacherContext.jsx";
import { useFormik } from "formik";
import { useScore } from "../../Logic/ScoreContext.jsx";

export default function RenderQuestions() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [choice, setChoice] = useState([{}]);
  const [currentScore, setCurrentScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showIncorrectAnswer, setShowIncorrectAnswer] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState("");
  const navigate = useNavigate();
  const { course } = useCourse();
  const { score, setScore } = useScore();
  const formik = useFormik({
    initialValues: {
      bundleId: course,
      score: score,
    },
    onSubmit: (values) => {
      console.log(questionNumber);
      console.log(
        questions[questionNumber - 2].choices[answers[questionNumber - 1]]
          .choiceText.choiceText
      );
      if (
        selectedChoice ===
        questions[questionNumber - 2].choices[answers[questionNumber - 1]]
          .choiceText.choiceText
      ) {
        console.log("hello");
        setCurrentScore((prevScore) => prevScore + 1);
        console.log(currentScore);
      } else {
        console.log("Sorry Bruh");
      }
      setScore(currentScore);
    },
  });

  useEffect(() => {
    const fetchedQuestions = async () => {
      try {
        const questionResponse = await fetch(
          `http://localhost:8080/api/bundles/${course}`
        );
        const questionData = await questionResponse.json();
        setQuestions(questionData.questions);
        setQuestionNumber(questionData.id);

        const allChoices = questionData.questions.map((question) =>
          question.choices.map((choice) => choice)
        );
        setChoice(allChoices);

        questionData.questions.forEach((question) => {
          setAnswers((prevAnswers) => [...prevAnswers, question.answerIndex]);
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchedQuestions();
  }, []);
  const handleNextQuestion = () => {
    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
    // console.log(questionNumber);
    // console.log(answers[questionNumber]);
  };
  const handleCheck = (e) => {
    console.log(e.target.value);
    setSelectedChoice(e.target.value);
  };

  // console.log(questions);
  // console.log(questions[questionNumber]);
  // console.log(questionNumber);
  // console.log(answers[questionNumber]);
  // console.log(choice[questionNumber]);

  return (
    <div>
      {questions[questionNumber - 1] ? (
        <div className="flex flex-col gap-2">
          <p>{questions[questionNumber - 1].question}</p>
          <form onSubmit={formik.handleSubmit}>
            {choice[questionNumber - 1].map((choice) => (
              <div
                key={choice.id}
                className="flex flex-row gap-4 px-4 py-2 rounded-md my-4"
                style={{
                  backgroundColor:
                    selectedChoice === choice.choiceText
                      ? "rgba(8, 131, 149, 0.1)"
                      : "white",
                }}
              >
                <input
                  type="radio"
                  name="choice"
                  value={choice.choiceText}
                  onClick={handleCheck}
                />
                <label>{choice.choiceText}</label>
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
                  padding: "0.8rem 3rem",
                }}
                onClick={handleNextQuestion}
              >
                Skip
              </Button>
              <input
                type="submit"
                onClick={handleNextQuestion}
                value={
                  questionNumber === questions.length - 1 ? "Finish" : "Next"
                }
                className="submit-btn"
              />
            </div>
          </form>
        </div>
      ) : (
        navigate("/displayScore")
      )}
    </div>
  );
}
