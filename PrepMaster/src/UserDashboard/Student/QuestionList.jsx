import { useEffect, useState } from "react";
import { useCourse } from "../../Logic/CourseContext";
import CustomButton from "../../Components/CustomButton";
import LeaveExam from "../../assets/LeaveExam.svg";
import { NavLink, useNavigate } from "react-router-dom";

export default function QuestionList() {
  const { course } = useCourse();
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  console.log(questions.questions);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionResponse = await fetch(
        `http://localhost:8080/api/bundles/${course}`
      );
      const questionData = await questionResponse.json();
      console.log(questionData);
      setQuestions(questionData);
    };
    fetchQuestions();
  }, []);
  console.log(questions);
  const back = () => navigate(-1);
  return (
    <div className="exam-sheet h-screen flex justify-center place-items-center max-md:px-4">
      <div className="bg-white flex flex-col md:w-1/2 rounded-xl question gap-8 h-fit p-12 max-md:px-4">
        <div className="flex flex-row max-md:justify-evenly">
          <div
            onClick={back}
            className="flex flex-row self-center gap-2 cursor-pointer"
          >
            <img src={LeaveExam} alt="Leave Exam" />
          </div>
          <p className="text-2xl font-medium flex m-auto">
            {" "}
            Here are all the questions{" "}
          </p>
        </div>

        {questions.questions === undefined ? (
          <div>Loading...</div>
        ) : (
          questions.questions.map((question, index) => {
            return (
              <div className="container py-4 px-6 flex flex-col gap-6">
                <p>
                  {" "}
                  {index + 1}: {question.question}{" "}
                </p>
                <div className="flex justify-between">
                  <p className="font-medium">
                    Difficulty: {question.difficulty}
                  </p>
                  <NavLink to="/Error404">
                    <CustomButton
                      text={"Go to question"}
                      padding={"0.5rem 1.2rem"}
                    />
                  </NavLink>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
