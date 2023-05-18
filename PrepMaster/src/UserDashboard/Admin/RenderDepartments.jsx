import { NavLink } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";
import DeleteButton from "../../Components/DeleteButton";
import Filter from "../../assets/Filter.svg";
import search from "../../assets/search.svg";
import EditUser from "./EditUser";
import EditDepartment from "./EditDepartment";

export default function RenderDepartments() {
  const departments = [
    {
      name: "Computer Science",
      dean: "Shewatatek Lema",
    },
    {
      name: "Computer Science",
      dean: "Shewatatek Lema",
    },
    {
      name: "Computer Science",
      dean: "Shewatatek Lema",
    },
    {
      name: "Computer Science",
      dean: "Shewatatek Lema",
    },
    {
      name: "Computer Science",
      dean: "Shewatatek Lema",
    },
    {
      name: "Computer Science",
      dean: "Shewatatek Lema",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between pb-4 bottom-styled">
        <p className="self-center opacity-50">Name</p>
        <p className="self-center opacity-50">Dean</p>
        <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-fit">
          <img src={search} alt="search" />
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-4">
          <p className="self-center opacity-50">Filter</p>
          <img src={Filter} alt="Filter" />
        </div>
      </div>
      {departments.map((department) => {
        return (
          <div
            key={department.name}
            className="flex flex-row gap-24 bottom-styled pb-6"
          >
            <p className="w-64 self-center">{department.name}</p>
            <p className="w-64 self-center">{department.dean}</p>
            <NavLink to="/editDepartment" element={<EditDepartment />}>
              <CustomButton text={"Edit"} padding={"0.5rem 2rem"} />
            </NavLink>
            <DeleteButton text={"Delete"} padding={"0.5rem 1.5rem"} />
          </div>
        );
      })}
    </div>
  );
}
