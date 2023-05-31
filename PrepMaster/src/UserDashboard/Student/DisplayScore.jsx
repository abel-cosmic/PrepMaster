import { useEffect, useState } from "react";
import { useCourse } from "../../Logic/CourseContext";
import { useScore } from "../../Logic/ScoreContext";
import { useEmail } from "../../Logic/TeacherContext";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { NavLink } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";

export default function DisplayScore() {
  const { score } = useScore();
  const { email } = useEmail();
  const { course } = useCourse();
  const { width, height } = useWindowSize();
  const [user, setUser] = useState([]);
  const [exam, setExam] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await fetch("http://localhost:8080/api/students");
        const userData = await userResponse.json();
        console.log(userData);
        userData.some((student) => {
          if (email === student.email) {
            setUser(student);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();

    const fetchCourse = async () => {
      try {
        const examReponse = await fetch("http://localhost:8080/api/bundles");
        const examData = await examReponse.json();
        examData.some((exam) => {
          if (course === exam.id) {
            console.log(exam);
            setExam(exam);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourse();
  }, []);

  return (
    <div className="h-screen flex justify-center">
      <Confetti></Confetti>
      <div className="flex flex-col gap-6 justify-center place-items-center">
        <p className="text-5xl">Congratulations {user.firstName} 🥳🥳🥳 </p>
        <p className="text-2xl">You have successfully finished {exam.name}</p>
        <p>Your Score is : {score}</p>
        <NavLink to="/StudentDashboard">
          <CustomButton text="Go Back To My Dashboard" padding={"1rem 3rem"} />
        </NavLink>
      </div>
    </div>
  );
}
