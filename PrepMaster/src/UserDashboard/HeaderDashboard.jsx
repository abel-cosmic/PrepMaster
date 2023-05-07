import notification from "../assets/Notification.svg";
import username from "../assets/Username.svg";
import search from "../assets/search.svg";

export default function HeaderDashboard() {
  return (
    <div className="flex flex-row justify-between" id="HeaderDashboard">
      <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-fit">
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
  );
}
