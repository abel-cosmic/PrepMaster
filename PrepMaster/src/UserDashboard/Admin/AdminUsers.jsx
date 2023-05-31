import { NavLink } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";
import RenderUsers from "./RenderUsers";
import AddUser from "./AddUser";
import { useEffect, useState } from "react";

export default function AdminUsers() {
  return (
    <div className="flex flex-col gap-4 mt-10 w-full">
      <p className="text-2xl font-medium">Users</p>
      <div className="flex flex-row justify-between">
        <p>Let's have a look at your users </p>
        <NavLink to="/addUser" element={<AddUser />}>
          <CustomButton text={"Add"} padding={"0.8rem 2.5rem"} />
        </NavLink>
      </div>
      <RenderUsers />
    </div>
  );
}
