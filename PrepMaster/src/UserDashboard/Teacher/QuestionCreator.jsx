import { useFormik } from "formik";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Back from "../../assets/LeaveExam.svg";
import CreateExam from "./CreateExam";

export default function QuestionCreator() {
  const formik = useFormik({
    initialValues: {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
      description: "",
      difficulty: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      if ((questionNumber = questionLength - 1)) {
        setQuestions((prevQuestions) => [...prevQuestions, values]);
        navigate("/Scaling");
      } else {
        setQuestions((prevQuestions) => [...prevQuestions, values]);
        setQuestionNumber(questionNumber + 1);
      }
      formik.resetForm();
    },
  });

  const location = useLocation();
  const navigate = useNavigate();
  const values = {
    coursename: location.state.coursename,
    examname: location.state.examname,
    noquestion: location.state.noquestion,
    allowedtime: location.state.allowedtime,
  };
  const questionLength = values.noquestion;
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  console.log(questionNumber);
  console.log(questionLength);
  const questionInputs = [
    {
      name: "option1",
      placeholder: "Enter Option 1",
    },
    {
      name: "option2",
      placeholder: "Enter Option 2",
    },
    {
      name: "option3",
      placeholder: "Enter Option 3",
    },
    {
      name: "option4",
      placeholder: "Enter Option 4",
    },
  ];
  console.log(questions);

  return (
    <div className="exam-sheet h-screen flex justify-center place-items-center">
      <div className="bg-white flex flex-col md:w-1/2 rounded-xl question gap-8 h-fit p-12 max-md:px-6">
        <div className="flex flex-row">
          <NavLink to="/TeacherDashboard/CreateExam" element={<CreateExam />}>
            <div className="flex flex-row gap-4">
              <img src={Back} alt="back" />
              <p className="self-center">Back</p>
            </div>
          </NavLink>
          <p className="md:text-2xl max-md:text-xl self-center font-medium m-auto">
            Enter {values.noquestion} Questions
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            className="container w-full flex pl-4 pr-10 py-2"
            placeholder="Enter Question"
            value={formik.values.question}
            onChange={formik.handleChange}
            name="question"
          />
          <div className="flex flex-col gap-6 my-6">
            {questionInputs.map((item, index) => {
              return (
                <div className="flex flex-row gap-6" key={item.name}>
                  <input
                    type="radio"
                    name="answer"
                    value={item.name}
                    checked={formik.values.answer === item.name}
                    onChange={formik.handleChange}
                  />
                  <input
                    type="text"
                    name={item.name}
                    value={formik.values[item.name]}
                    placeholder={item.placeholder}
                    className="container w-full flex pl-4 pr-10 py-2"
                    onChange={formik.handleChange}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-6 mb-6">
            <input
              type="text"
              className="container w-full flex pl-4 pr-10 py-2"
              placeholder="Enter Answer Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              name="description"
            />
            <input
              type="text"
              className="container w-full flex pl-4 pr-10 py-2"
              placeholder="Enter Difficulty"
              value={formik.values.difficulty}
              onChange={formik.handleChange}
              name="difficulty"
            />
          </div>
          <div className="w-full flex justify-end">
            <input
              type="submit"
              value={questionNumber === questionLength ? "Finish" : "Next"}
              className="submit-btn flex place-items-end"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
