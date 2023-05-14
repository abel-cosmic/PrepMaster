import CustomButton from "../../Components/CustomButton";
import RenderUsers from "./RenderUsers";

export default function AdminUsers() {
  return (
    <div className="flex flex-col gap-4 mt-10 w-full">
      <p className="text-2xl font-medium">Users</p>
      <div className="flex flex-row justify-between">
        <p>Let's have a look at your users </p>
        <CustomButton text={"Add"} padding={"0.8rem 2.5rem"} />
      </div>
      <RenderUsers />
    </div>
  );
}
