import Logo from "../../assets/logo.svg";
import AnalyticsIcon from "../../assets/AnalyticsIcon.svg";
import DashBoardIcon from "../../assets/DashboardIcon.svg";
import SettingsIcon from "../../assets/SettingsIcon.svg";
import SupportIcon from "../../assets/SupportIcon.svg";
import ExamIcon from "../../assets/ExamIcon.svg";
import ViewExams from "../../assets/ViewExams.svg";
import SpreadLine from "../../assets/SpreadLine.png";
import { NavLink, Outlet } from "react-router-dom";
import HeaderDashboard from "../HeaderDashboard";
import Logout from "../Logout";
import LandingPage from "../../LandingPage/LandingPage";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import TeacherDashboard from "./TeacherDashboard";
import AddTeacher from "./AddTeacher";
import TeacherContext from "../../Logic/TeacherContext";

export default function Teacher() {
  const user = useContext(TeacherContext);
  const email = user?.email;
  const [isHead, setIsHead] = useState(false);

  console.log(email);

  return (
    <div className="flex flex-row gap-6 m-6 max-md:mt-16">
      <div className="max-md:hidden flex flex-col gap-6 w-fit " id="SideBar">
        <NavLink to="/" element={<LandingPage />}>
          <div className=" Logo flex justify-center self-center w-5/6 ">
            <img src={Logo} alt="Logo" />
          </div>
        </NavLink>

        <div className="Navigations place-items-center flex flex-col gap-6 mt-10 mb-32 ">
          <NavLink
            to={{ path: "", state: { email: email } }}
            end
            className="w-72 flex justify-center"
          >
            <div className="side-bar text-md w-max" id="Dashboard">
              <img src={DashBoardIcon} alt="Dashboard Icon" />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink
            to={{ pathname: "CreateExam", state: { email: email } }}
            className="w-72 flex justify-center"
          >
            <div className="side-bar  text-md " id="Exam">
              <img src={ExamIcon} alt="Create Exam Icon" />
              <p>Create Exam</p>
            </div>
          </NavLink>
          <NavLink to="ViewExams" className="w-72 flex justify-center">
            <div className="side-bar  text-md " id="Exam">
              <img src={ViewExams} alt="View Exams Icon" />
              <p>View Exams</p>
            </div>
          </NavLink>

          {isHead && (
            <NavLink to="AddTeacher">
              <div className="side-bar text-md" id="AddTeacher">
                <img src={AnalyticsIcon} alt="Analytics Icon" />
                <p>Add Teacher</p>
              </div>
            </NavLink>
          )}

          <div className="side-bar text-md " id="Analytics">
            <img src={AnalyticsIcon} alt="Analytics Icon" />
            <p>Analytics</p>
          </div>
          <div className="my-6" id="SpreadLine">
            <img src={SpreadLine} alt="Spread Line" />
          </div>
          <div className="side-bar text-md" id="Support">
            <img src={SupportIcon} alt="Support Icon" />
            <p>Support</p>
          </div>
          <NavLink to="StudentSetting" className="w-72 flex justify-center">
            <div className="side-bar text-md" id="Settings">
              <img src={SettingsIcon} alt="Settings Icon" />
              <p>Settings</p>
            </div>
          </NavLink>
          <Logout />
        </div>
        <div className=" copyright">
          <p className="opacity-50 text-xs">© PrepMaster all rights reserved</p>
        </div>
      </div>
      <div className="flex flex-col w-full px-4">
        <HeaderDashboard />
        <Outlet />
      </div>
    </div>
  );
}
