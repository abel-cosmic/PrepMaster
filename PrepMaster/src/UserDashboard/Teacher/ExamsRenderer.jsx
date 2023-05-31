import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import StopWatch from "../../assets/StopWatch.svg";
import PencilPaper from "../../assets/PencilPaper.svg";
import CustomButton from "../../Components/CustomButton";
import { NavLink } from "react-router-dom";
import { useCourse } from "../../Logic/CourseContext";
import EditExam from "../Teacher/EditExam";

export default function ExamRenderer() {
  const [exams, setExams] = useState([]);
  const [courses, setCourses] = useState([]);
  const { setCourse } = useCourse();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesResponse = await fetch(
          "http://localhost:8080/api/courses"
        );
        const coursesData = await coursesResponse.json();
        setCourses(coursesData);

        const fetchExams = async () => {
          try {
            const examsResponse = await fetch(
              "http://localhost:8080/api/bundles"
            );
            const examsData = await examsResponse.json();
            setExams(examsData);
          } catch (err) {
            console.error("Error fetching exams:", err);
          }
        };
        fetchExams();
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      {courses.map((course) => {
        const courseExams = exams.filter((exam) => exam.courseId === course.id);

        return (
          <div
            key={course.id}
            className="flex flex-col gap-6 w-full pr-60 max-md:pr-4 max-md:pb-10"
          >
            <p className="text-xl font-medium w-full">{course.name}</p>
            <div className="grid grid-cols-2 gap-6 w-full max-md:flex max-md:flex-col">
              {courseExams.map((exam) => (
                <div
                  key={exam.id}
                  className="flex flex-col gap-4 container py-4 px-6"
                >
                  <p className="text-lg font-medium">{exam.name}</p>
                  <p className="w-5/6 text-justify">{exam.description}</p>
                  <div className="flex md:flex-row max-md:flex-col justify-between">
                    <div className="flex flex-row gap-2 max-md:justify-between w-full">
                      <div className="flex flex-row gap-4 w-52">
                        <img src={StopWatch} alt="Allowed Time" />
                        <p className="self-center w-full">
                          {exam.timeAllowed} Mins
                        </p>
                      </div>
                      <div className="flex flex-row gap-4 w-full">
                        <img src={PencilPaper} alt="Exam size" />
                        <p className="self-center w-full">
                          {exam.questions.length} Questions
                        </p>
                      </div>
                    </div>
                    <div className="max-md:mx-auto max-md:my-4">
                      <NavLink
                        to="/EditExam"
                        element={<EditExam />}
                        onClick={() => setCourse(exam.id)}
                      >
                        <CustomButton
                          text="Edit"
                          padding="0.5rem 1.5rem"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent the navigation from triggering here
                          }}
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto mb-6">
              <CustomButton text={"Load More"} padding={"0.7rem 2.5rem"} />
            </div>
          </div>
        );
      })}
    </>
  );
}
