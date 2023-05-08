import CustomButton from "../../Components/CustomButton";

export default function StudentSecurity() {
  const passwordList = [
    {
      title: "Old Password",
      placeholder: "Enter old password",
    },
    {
      title: "New Password",
      placeholder: "Enter new password",
    },
    {
      title: "Confirm Password",
      placeholder: "Re-Enter new password",
    },
  ];

  const RenderPasswordInputs = () => {
    return passwordList.map((item) => {
      return (
        <div key={item.title} className="flex flex-row gap-6">
          <p className="w-44">{item.title}</p>
          <input
            type="password"
            className="container w-fit flex pl-4 pr-10 py-2"
            name={item.title}
            id={item.title}
            placeholder={item.placeholder}
            size="34"
          />
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-6 w-fit">
      <RenderPasswordInputs />
      <div className="flex justify-end">
        <CustomButton text={"Save Changes"} padding={"0.8rem 2rem"} />
      </div>
    </div>
  );
}
