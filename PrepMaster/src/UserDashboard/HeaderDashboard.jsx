import notification from "../assets/Notification.svg";
import username from "../assets/Username.svg";
import search from "../assets/search.svg";
import menu from "./../assets/menu.svg";
import active from "./../assets/ACTIVE-MENU.svg";

export default function HeaderDashboard() {
  return (
    <div>
      <div className="flex flex-row justify-between max-md:border-b max-md:fixed top-0 left-0 right-0 max-md:bg-white z-50 pr-2 md:w-[90rem]" id="HeaderDashboard">
      <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-fit max-md:hidden">
        <img src={search} alt="search" />
        <input type="search" name="search" id="search" placeholder="Search" />
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
    </div>
  );
}
 