import { NavLink } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";
import DeleteButton from "../../Components/DeleteButton";
import Filter from "../../assets/Filter.svg";
import search from "../../assets/search.svg";
import EditUser from "./EditUser";
import message from "../../assets/mail.svg";
export default function RenderUsers() {
  const users = [
    {
      name: "Abel Shibabaw",
      type: "Student",
      email: "abel@gmail.com",
    },
    {
      name: "Abel Shibabaw",
      type: "Student",
      email: "abel@gmail.com",
    },
    {
      name: "Abel Shibabaw",
      type: "Student",
      email: "abel@gmail.com",
    },
    {
      name: "Mohammed Ibrahim",
      type: "Teacher",
      email: "mohammed@gmail.com",
    },
    {
      name: "Mohammed Ibrahim",
      type: "Teacher",
      email: "mohammed@gmail.com",
    },
    {
      name: "Mohammed Ibrahim",
      type: "Teacher",
      email: "mohammedibrahim4641@gmail.com",
    },
  ];

  return (
    <div className="flex flex-col gap-6 max-md:gap-4">
      <div className="flex flex-row gap-24">
        <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-full max-md:visible md:hidden">
          <img src={search} alt="search" />
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-4 max-md:visible md:hidden">
          <p className="self-center opacity-50">Filter</p>
          <img src={Filter} alt="Filter" />
        </div>
      </div>
      <div className="flex flex-row justify-between pb-4 gap-2 bottom-styled max-md:hidden">
        <p className="self-center opacity-50">Name</p>
        <p className="self-center opacity-50">Email</p>
        <p className="self-center opacity-50">User Type</p>
        <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-fit max-md:hidden">
          <img src={search} alt="search" />
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-4 max-md:hidden">
          <p className="self-center opacity-50">Filter</p>
          <img src={Filter} alt="Filter" />
        </div>
      </div>
      {users.map((user) => {
        return (
          <div
            key={user.email}
            className="flex flex-row gap-20 pb-4 bottom-styled max-md:hidden"
          >
            <p className="md:w-44 self-center text-sm flex flex-row gap-20"><span className="md:hidden">Name</span>{user.name}</p>
            <p className="md:w-64 self-center text-sm flex flex-row gap-20"><span className="md:hidden mr-4">Email</span>{user.email}</p>
            <p className="md:w-52 self-center text-sm flex flex-row gap-20"><span className="md:hidden">User Type</span>{user.type}</p>
            <div className="flex-row flex gap-10 max-md:hidden">
              <NavLink to="/edituser" element={<EditUser />}>
                <CustomButton text={"Edit"} padding={"0.5rem 2rem"} />
              </NavLink>
              <DeleteButton text={"Delete"} padding={"0.5rem 1.5rem"} />
            </div>
          </div>
        );
      })}
      {users.map((user) => {
        return (
          <div
            key={user.email}
            className="max-md:visible md:hidden px-6  border border-gray-200 p-8">
            <div className="flex flex-row w-full justify-between">
              <div className="font-medium text-lg"><span className="text-base font-normal">Name: </span>{user.name}</div>
              <div className="font-medium text-lg">{user.type}</div>
            </div>
            <div className="font-light text-sm flex flex-row gap-4 my-2">
              <span className="text-base font-normal">
                <img src={message} alt="message" className="login" />
                </span>{user.email}</div>
            <div className="flex-row flex justify-between max-md:visible my-2">
              <NavLink to="/edituser" element={<EditUser />}>
                <CustomButton text={"Edit"} padding={"0.8rem 3.5rem"} />
              </NavLink>
              <DeleteButton text={"Delete"} padding={"0.8rem 3.4rem"} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
