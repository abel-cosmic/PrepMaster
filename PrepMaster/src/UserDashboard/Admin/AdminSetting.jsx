import { Outlet, NavLink } from "react-router-dom";
import AdminSecurity from "./AdminSecurity";
import AdminProfile from "./AdmiinProfile";
export default function AdminSetting() {
  return (
    <div className="flex flex-col mt-10 gap-4 max-md:mt-6 ">
      <p className="text-xl font-medium">Settings</p>
      <p>Let's get some things configured</p>
      <ul type="none" className="settings-nav flex flex-row gap-6 text-sm">
        <NavLink
          to=""
          end
          element={<AdminProfile />}
          className="px-4 py-2 flex justify-center"
        >
          <li>Profile</li>
        </NavLink>
        <NavLink
          to="AdminSecurity"
          element={<AdminSecurity />}
          className="px-4 py-2 flex justify-center"
        >
          <li>Security</li>
        </NavLink>
      </ul>
      <Outlet />
    </div>
  );
}
