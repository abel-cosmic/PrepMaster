import CustomButton from "../../Components/CustomButton";
import DeleteButton from "../../Components/DeleteButton";
import Filter from "../../assets/Filter.svg";
import search from "../../assets/search.svg";

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
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between pb-4 bottom-styled">
        <p className="self-center opacity-50">Name</p>
        <p className="self-center opacity-50">Email</p>
        <p className="self-center opacity-50">User Type</p>
        <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-fit">
          <img src={search} alt="search" />
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-4">
          <p className="self-center opacity-50">Filter</p>
          <img src={Filter} alt="Filter" />
        </div>
      </div>
      {users.map((user) => {
        return (
          <div key={user.email} className="flex flex-row gap-24">
            <p className="w-44">{user.name}</p>
            <p className="w-64">{user.email}</p>
            <p className="w-52">{user.type}</p>
            <CustomButton text={"Edit"} padding={"0.5rem 2rem"} />
            <DeleteButton text={"Delete"} padding={"0.5rem 1.5rem"} />
          </div>
        );
      })}
    </div>
  );
}
