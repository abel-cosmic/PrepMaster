import { useEffect, useState } from "react";
import { useUserData } from "../../Logic/UserDataContext";
import { useEmail } from "../../Logic/TeacherContext";

export default function OverViewContainer() {
  const [stats, setStats] = useState([{}]);
  const { email } = useEmail();
  const [user, setUser] = useState([{}]);
  // console.log(email);

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await fetch("http://localhost:8080/api/admins");
      const userData = await userResponse.json();
      setUser(userData);
      console.log(userData); // Log fetched user data here
      userData.some((admin) => {
        if (email === admin.email) {
          console.log("Data fetched here" + admin.email);
          const fetchStats = async () => {
            const statsResponse = await fetch(
              `http://localhost:8080/api/admins/${admin.id}/statistics`
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

  return (
    <div className="flex flex-row justify-evenly gap-6 max-md:flex-wrap w-full">
      <div className="container flex flex-col gap-2 pl-4  py-4 self-center w-full ">
        <p className="text-lg font-medium ">Number of Departments</p>
        <p className="text-4xl font-bold">{stats.numberOfDepartments}</p>
      </div>
      <div className="container flex flex-col gap-2 pl-4  py-4 self-center w-full ">
        <p className="text-lg font-medium ">Number of Students</p>
        <p className="text-4xl font-bold">{stats.numberOfStudents}</p>
      </div>
      <div className="container flex flex-col gap-2 pl-4  py-4 self-center w-full ">
        <p className="text-lg font-medium ">Number of Teachers</p>
        <p className="text-4xl font-bold">{stats.numberOfTeachers}</p>
      </div>
      <div className="container flex flex-col gap-2 pl-4  py-4 self-center w-full ">
        <p className="text-lg font-medium ">Number of Courses</p>
        <p className="text-4xl font-bold">{stats.numberOfCourses}</p>
      </div>
    </div>
  );
}
