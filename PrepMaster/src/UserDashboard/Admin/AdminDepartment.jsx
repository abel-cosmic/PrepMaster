import { NavLink } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";
import RenderDepartments from "./RenderDepartments";
import AddDepartment from "./AddDepartment";

export default function AdminDepartment() {
  return (
    <div className="flex flex-col gap-4 mt-10 w-full">
      <p className="text-2xl font-medium">Departments</p>
      <div className="flex flex-row justify-between">
        <p>Let's have a look at your departments </p>
        <NavLink to="/addDepartment" element={<AddDepartment />}>
          <CustomButton text={"Add"} padding={"0.8rem 2.5rem"} />
        </NavLink>
      </div>
      <RenderDepartments />
    </div>
  );
}
