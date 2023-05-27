import { useEffect, useState } from "react";
import { useEmail } from "../../Logic/TeacherContext";
import ProgressReport from "../Student/ProgressReport";
import MostAchievingDepartment from "./MostAchiebingDepartment";
import OverViewContainer from "./OverViewContainer";

export default function AdminDashboard() {
  const { email } = useEmail();
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/admins/2")
      .then((response) => response.json())
      .then((admin) => {
        setName(admin.firstName);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-10 w-fit" id="admin-dashboard">
      <div>
        <p className="text-2xl font-medium">Dashboard</p>
      </div>
      <p>
        Hello, {name} -{" "}
        <span className="opacity-50">here's what's going on today</span>
      </p>
      <div className="flex flex-row gap-6 max-md:flex-col max-md:gap-4">
        <OverViewContainer />
      </div>
      <ProgressReport />
      <div className="flex flex-row gap-4 justify-between max-md:flex-col">
        <div className="flex flex-col gap-4 container px-6 py-4 ">
          <MostAchievingDepartment />
        </div>
        <div className="flex flex-col gap-4 container px-6 py-4">
          <MostAchievingDepartment />
        </div>
      </div>
    </div>
  );
}
