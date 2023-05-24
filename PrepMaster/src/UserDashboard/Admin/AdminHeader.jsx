import notification from "../../assets/Notification.svg";
import username from "../../assets/Username.svg";
import search from "../../assets/search.svg";
import menu from "../../assets/menu.svg";
import active from "../../assets/ACTIVE-MENU.svg";
import React, { useState } from "react";
import AnalyticsIcon from "../../assets/AnalyticsIcon.svg";
import DashBoardIcon from "../../assets/DashboardIcon.svg";
import SettingsIcon from "../../assets/SettingsIcon.svg";
import SupportIcon from "../../assets/SupportIcon.svg";
import ExamIcon from "../../assets/ExamIcon.svg";
import { NavLink, Outlet } from "react-router-dom";
import Logout from "../Logout";
import UsersIcon from "../../assets/UsersIcon.svg";
import SpreadLine from "../../assets/SpreadLine.png";
import HeaderDashboard from "../HeaderDashboard";
import LandingPage from "../../LandingPage/LandingPage";
import DepartmentIcon from "../../assets/Department.svg";

export default function AdminHeader() {
  const [isActive, setIsActive] = useState(false);

  const handleImageClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="max-md:visible max-md:mt-10 md:hidden">
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
          <NavLink to="" end className="w-72 flex justify-center">
            <div className="side-bar text-md w-max" id="Dashboard">
              <img src={DashBoardIcon} alt="Dashboard Icon" />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="AdminUsers" className="w-72 flex justify-center">
            <div className="side-bar  text-md " id="Users">
              <img src={UsersIcon} alt="Users Icon" />
              <p>Users</p>
            </div>
          </NavLink>
          <NavLink to="AdminDepartment" className="w-72 flex justify-center">
            <div className="side-bar  text-md " id="Users">
              <img src={DepartmentIcon} alt="Department Icon" />
              <p>Department</p>
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
          <NavLink to="AdminSetting" className="w-72 flex justify-center">
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
    </div>
  );
}
 