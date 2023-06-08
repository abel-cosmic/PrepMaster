import { useEffect, useState } from "react";
import { useUserData } from "../../Logic/UserDataContext";
import { useEmail } from "../../Logic/TeacherContext";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function OverViewContainer() {
  const [stats, setStats] = useState([{}]);
  const { email } = useEmail();
  const [user, setUser] = useState([{}]);
  // console.log(email);

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await fetch("http://localhost:8080/api/students");
      const userData = await userResponse.json();
      setUser(userData);
      console.log(userData); // Log fetched user data here
      userData.some((admin) => {
        if (email === admin.email) {
          console.log("Data fetched here" + admin.email);
          const fetchStats = async () => {
            const statsResponse = await fetch(
              `http://localhost:8080/api/students/${admin.id}/statistics`
            );
            const statsData = await statsResponse.json();
            setStats(statsData);
          };
          fetchStats();
        }
      });
    };
    fetchUser();
  }, []);

  console.log(stats);
  // console.log(stats);
  // console.log(...user);
  console.log(stats.questionSuccessRate);

  return (
    <div className="flex flex-row justify-evenly gap-6 max-md:flex-wrap w-full">
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="100"
        className="container flex flex-col gap-2 pl-4  py-4 self-center w-full "
      >
        <p className="text-lg font-medium ">Number of Questions Solved</p>
        <p className="text-4xl font-bold">{stats.numberOfQuestionsSolved}</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="200"
        className="container flex flex-col gap-2 pl-4  py-4 self-center w-full "
      >
        <p className="text-lg font-medium ">Number of Tests Taken</p>
        <p className="text-4xl font-bold">{stats.numberOfTestsTaken}</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="300"
        className="container flex flex-col gap-2 pl-4  py-4 self-center w-full "
      >
        <p className="text-lg font-medium ">Number of Questions Attempted</p>
        <p className="text-4xl font-bold">{stats.numberOfQuestionsAttempted}</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="400"
        className="container flex flex-col gap-2 pl-4  py-4 self-center w-full "
      >
        <p className="text-lg font-medium ">Success Rate</p>
        <p className="text-4xl font-bold">{stats.questionSuccessRate}</p>
      </div>
    </div>
  );
}
