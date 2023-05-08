import Logo from "../../assets/Logo.png";
import AnalyticsIcon from "../../assets/AnalyticsIcon.svg";
import DashBoardIcon from "../../assets/DashboardIcon.svg";
import SettingsIcon from "../../assets/SettingsIcon.svg";
import SupportIcon from "../../assets/SupportIcon.svg";
import LogoutIcon from "../../assets/LogoutIcon.svg";
import ExamIcon from "../../assets/ExamIcon.svg";
import SpreadLine from "../../assets/SpreadLine.png";
import { NavLink, Outlet } from "react-router-dom";
import HeaderDashboard from "../HeaderDashboard";

export default function Student() {
  return (
    <div className="flex flex-row gap-6 m-6 ">
      <div className="flex  flex-col gap-6 w-fit " id="SideBar">
        <div className=" Logo flex justify-center self-center ">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="Navigations place-items-center flex flex-col gap-6 mt-10 mb-32 ">
          <NavLink className="w-72 flex justify-center">
            <div className="side-bar text-md w-max " id="Dashboard">
              <img src={DashBoardIcon} alt="Dashboard Icon" />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="StudentExam" className="w-72 flex justify-center">
            <div className="side-bar  text-md " id="Exam">
              <img src={ExamIcon} alt="Exam Icon" />
              <p>Exam</p>
            </div>
          </NavLink>
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
          <div className="side-bar text-md" id="Settings">
            <img src={SettingsIcon} alt="Settings Icon" />
            <p>Settings</p>
          </div>
          <div className="side-bar text-md" id="Logout">
            <img src={LogoutIcon} alt="Logout Icon" />
            <p>Logout</p>
          </div>
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