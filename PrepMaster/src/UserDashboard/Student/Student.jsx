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
import Logout from "../Logout";
import LandingPage from "../../LandingPage/LandingPage";
import { useContext } from "react";
import StudentContext from "../../Logic/StudentContext";
//
import notification from "../../assets/Notification.svg";
import username from "../../assets/Username.svg";
import search from "../../assets/search.svg";
import menu from "../../assets/menu.svg";
import active from "../../assets/ACTIVE-MENU.svg";
import React, { useState } from "react";



export default function Student() {
  const email = useEmail();

  const [isActive, setIsActive] = useState(false);

  const handleImageClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-row gap-6 m-6 max-md:mx-0">
      <div className="flex  flex-col gap-6 w-fit max-md:hidden " id="SideBar">
        <NavLink to="/" element={<LandingPage />}>
          <div className=" Logo flex justify-center self-center w-5/6 ">
            <img src={Logo} alt="Logo" />
          </div>
        </NavLink>

        <div className="Navigations place-items-center flex flex-col gap-6 mt-10 mb-32 ">
          <NavLink to="" end className="w-72 flex justify-center">
            <div className="side-bar text-md w-max" id="Dashboard">
              <img src={DashBoardIcon} alt="Dashboard Icon" />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="StudentExam" className="w-72 flex justifullfy-center">
            <div className="side-bar  text-md w-max" id="Exam">
              <img src={ExamIcon} alt="Exam Icon" className="mr-10" />
              <p className="exam">Exam</p>
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
      <div className="flex flex-col w-full px-4 max-md:mt-10">
        <div className="max-md:hidden">
          <HeaderDashboard />
        </div>
        <div className="max-md:visible md:hidden">
      <div className="flex flex-row justify-between max-md:border-b max-md:fixed top-0 left-0 right-0 max-md:bg-white z-50 pr-2 md:w-[90rem]" id="HeaderDashboard">
      <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-fit max-md:hidden">
        <img src={search} alt="search" />
        <input type="search" name="search" id="search" placeholder="Search" />
      </div>
      <div className="md:hidden  self-center my-6 ml-6">
        <img src={isActive ? active : menu} alt="menu" onClick={handleImageClick}/>
      </div>
      <div className="flex flex-row gap-4 justify-center" id="header-icons">
        <div className="notification flex justify-center">
          <img src={notification} alt="notification" className="w-5/6" />
        </div>
        <div className="username flex justify-center">
          <img src={username} alt="username" className="w-5/6" />
        </div>
      </div> 
    </div>
    <div className={`${isActive ? "visible" : "hidden"} max-md:fixed left-0 top-[4.22rem] bg-white z-50 border-t mt-2 w-full flex flex-col`}>
        <div className="Navigations place-items-center flex flex-col gap-6 mt-10 mb-32 ">
          <NavLink to="" end className="w-72 flex  self-start">
            <div className="side-bar text-md w-max" id="Dashboard">
              <img src={DashBoardIcon} alt="Dashboard Icon" />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="StudentExam" className="w-72 flex self-start">
            <div className="side-bar  text-md w-max" id="Exam">
              <img src={ExamIcon} alt="Exam Icon" className="mr-10" />
              <p className="exam">Exam</p>
            </div>
          </NavLink>
          <div className="self-start pl-10">
          <div className="side-bar text-md " id="Analytics">
            <img src={AnalyticsIcon} alt="Analytics Icon" />
            <p>Analytics</p>
          </div>
          </div>
         <div className="self-start pl-10">
         <div className="side-bar text-md self-start" id="Support">
            <img src={SupportIcon} alt="Support Icon" />
            <p>Support</p>
          </div>
         </div>
          <NavLink to="StudentSetting" className="w-72 flex self-start">
            <div className="side-bar text-md" id="Settings">
              <img src={SettingsIcon} alt="Settings Icon" />
              <p>Settings</p>
            </div>
          </NavLink>
          <div className="self-start pl-10">
          <Logout />
          </div>
        </div>
        <div className=" copyright">
          <p className="opacity-50 text-xs">© PrepMaster all rights reserved</p>
        </div>
      </div>
    </div>
        <Outlet/>
      </div>
    </div>
  );
}
