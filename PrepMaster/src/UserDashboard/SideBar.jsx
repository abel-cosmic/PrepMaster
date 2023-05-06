import Logo from "../assets/Logo.png";
import AnalyticsIcon from "../assets/AnalyticsIcon.png";
import DashBoardIcon from "../assets/DashboardIcon.png";
import SettingsIcon from "../assets/SettingsIcon.png";
import SupportIcon from "../assets/SupportIcon.png";
import LogoutIcon from "../assets/LogoutIcon.png";
import ExamIcon from "../assets/ExamIcon.png";
import SpreadLine from "../assets/SpreadLine.png";

export default function SideBar() {
  return (
    <div
      className="flex flex-col gap-6 ml-6 mt-6 h-screen w-fit justify-items-center"
      id="SideBar"
    >
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Navigations flex flex-col gap-6 mt-16 mb-44">
        <div className="side-bar text-lg" id="Dashboard">
          <img src={DashBoardIcon} alt="Dashboard Icon" />
          <p>DashBoard</p>
        </div>
        <div className="side-bar text-lg" id="Exam">
          <img src={ExamIcon} alt="Exam Icon" />
          <p>Exam</p>
        </div>
        <div className="side-bar text-lg" id="Analytics">
          <img src={AnalyticsIcon} alt="Analytics Icon" />
          <p>Analytics</p>
        </div>
        <div className="my-6" id="SpreadLine">
          <img src={SpreadLine} alt="Spread Line" />
        </div>
        <div className="side-bar text-lg" id="Support">
          <img src={SupportIcon} alt="Support Icon" />
          <p>Support</p>
        </div>
        <div className="side-bar text-lg" id="Settings">
          <img src={SettingsIcon} alt="Settings Icon" />
          <p>Settings</p>
        </div>
        <div className="side-bar text-lg" id="Logout">
          <img src={LogoutIcon} alt="Logout Icon" />
          <p>Logout</p>
        </div>
      </div>
      <div className="side-bar copyright">
        <p className="opacity-50 text-xs">© PrepMaster all rights reserved</p>
      </div>
    </div>
  );
}
