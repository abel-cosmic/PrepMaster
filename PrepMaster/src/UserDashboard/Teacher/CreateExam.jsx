import { useFormik } from "formik";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TeacherContext from "../../Logic/UserContext";

export default function CreateExam(){
  const user = useContext(TeacherContext);
  const email = user?.email;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      coursename: "",
      examname: "",
      noquestion: "",
      allowedtime: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/QuestionCreator", {
        state: {
          coursename: values.coursename,
          examname: values.examname,
          noquestion: values.noquestion,
          allowedtime: values.allowedtime,
        },
      });
    },
  });
  return (
    <div className="flex flex-col gap-4 mt-10 w-fit max-md:mt-20" id="student-dashboard">
      <div>
        <p className="text-xl font-medium">Create Exams</p>
      </div>
      <p>Let's make some exams shall we</p>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-10 flex flex-col gap-6"
      >
        <div className="flex flex-row gap-6 max-md:gap-0">
          <p className="self-center w-[14rem] max-md:w-[8rem]">Course Name</p>
          <input
            type="text"
            name="coursename"
            id="coursename"
            onChange={formik.handleChange}
            value={formik.coursename}
            placeholder="Eg: Object Oriented Programming"
            className="container w-fit flex pl-4 pr-10 py-2 max-md:pr-0"
            size="33"
            required
          />
        </div>
        <div className="flex flex-row gap-6 max-md:gap-0">
          <p className="self-center w-[14rem] max-md:w-[8rem]">Exam Name</p>
          <input
            type="text"
            name="examname"
            id="examname"
            onChange={formik.handleChange}
            value={formik.examname}
            placeholder="Eg: Object Oriented Programming Mockup Exam I"
            className="container w-fit flex pl-4 pr-10 py-2 max-md:pr-0"
            size="33"
            required
          />
        </div>
        <div className="flex flex-row gap-6 max-md:gap-0">
          <p className="self-center w-[14rem] max-md:w-[8rem]">Number of Questions</p>
          <input
            type="number"
            name="noquestion"
            id="noquestion"
            onChange={formik.handleChange}
            value={formik.noquestion}
            placeholder="Eg: 50"
            className="container w-96 flex pl-4 pr-10 py-2 max-md:pr-0 max-md:w-[21.5rem]"
            required
          />
        </div>
       <div className="flex flex-row gap-6 max-md:gap-0">
          <p className="self-center w-[14rem] max-md:w-[8rem]">Allowed Time</p>
          <input
            type="number"
            name="allowedtime"
            id="allowedtime"
            onChange={formik.handleChange}
            value={formik.allowedtime}
            placeholder="Eg:50 mins"
            className="container flex pl-4 pr-10 py-2 w-96 max-md:pr-0 max-md:w-[21.5rem]"
            required
          />
        </div>
        <input
          type="submit"
          value="Enter Questions"
          className="submit-btn flex justify-end self-end "
        />
      </form>
    </div>
  );
}
