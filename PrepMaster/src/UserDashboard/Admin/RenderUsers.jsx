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
      email: "mohammed@gmail.com",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="bottom-styled pb-4 flex flex-row justify-between ">
        <div className="flex flex-col gap-4">
          <p className="self-center">Name</p>
          {users.map((user) => {
            return <p>{user.name}</p>;
          })}
        </div>
        <div className="flex flex-col gap-4">
          <p className="self-center">Email</p>
          {users.map((user) => {
            return <p>{user.email}</p>;
          })}
        </div>
        <div className="flex flex-col gap-4">
          <p className="self-center">User Type</p>
          {users.map((user) => {
            return <p>{user.type}</p>;
          })}
        </div>
        <div className="flex flex-col gap-4">
          <div className="search-bar container py-2 pr-16 pl-4 flex flex-row gap-2 w-fit">
            <img src={search} alt="search" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          {users.map((user) => {
            return (
              <div className="flex flex-row justify-between">
                <CustomButton text={"Edit"} padding={"0.5rem 2rem"} />
                <DeleteButton text={"Delete"} padding={"0.5rem 2rem"} />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 self-center">
            <p className="text-sm opacity-50">Filter</p>
            <img src={Filter} alt="Filter" />
          </div>
        </div>
      </div>
    </div>
  );
}
