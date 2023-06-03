import { useEffect, useState } from "react";
import { useCourse } from "../../Logic/CourseContext";
import CustomButton from "../../Components/CustomButton";

export default function QuestionList() {
  const { course } = useCourse();
  const [questions, setQuestions] = useState([]);
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
  return (
    <div className="exam-sheet h-screen flex justify-center place-items-center">
      <div className="bg-white flex flex-col w-1/2 rounded-xl question gap-8 h-fit p-12">
        <p className="text-2xl font-medium flex justify-center">
          {" "}
          Here are all the questions{" "}
        </p>
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
                  <CustomButton
                    text={"Go to question"}
                    padding={"0.5rem 1.2rem"}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
