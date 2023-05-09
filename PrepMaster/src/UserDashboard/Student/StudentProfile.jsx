import CustomButton from "../../Components/CustomButton";

export default function StudentProfile() {
  const inputs = [
    {
      title: "First & Last Name",
      placeHolder: ["First Name", "Last Name"],
      inputType: ["text", "text"],
      required: true,
    },
    {
      title: "Email",
      placeHolder: "abc123@gmail.com",
      inputType: "email",
      required: true,
    },
    {
      title: "Phone Number",
      placeHolder: "+251912345678 (Optional)",
      inputType: "text",
      required: true,
    },
    {
      title: "School",
      placeHolder: "Hope Enterprise University College (Optonal)",
      inputType: "text",
      required: true,
    },
    {
      title: "Department",
      placeHolder: "Computer Science",
      inputType: "text",
      required: true,
    },
  ];

  function RenderInputLabel() {
    return inputs.map((item) => {
      return (
        <div key={item.title} className="flex flex-row gap-6">
          <p className="self-center text-sm">{item.title}</p>
        </div>
      );
    });
  }

  function RenderInputField() {
    return inputs.map((item) => {
      return (
        <div key={item.title} className="flex flex-col gap-2 ">
          {Array.isArray(item.placeHolder) ? (
            <div className="flex flex-row gap-6  place-content-between">
              <p className=" w-fit self-center">{item.title}</p>
              <div className="flex flex-row gap-2">
                <input
                  className="container flex justify-center pl-4 pr-10 py-2 w-fit"
                  type={`${item.inputType[0]}`}
                  name={`${item.title}-first`}
                  placeholder={`${item.placeHolder[0]}`}
                  id={`${item.title}-first`}
                  {...(item.required ? { required: true } : null)}
                />
                <input
                  className="container flex justify-center pl-4 pr-10 py-2 w-fit"
                  type={`${item.inputType[1]}`}
                  name={`${item.title}-last`}
                  placeholder={`${item.placeHolder[1]}`}
                  id={`${item.title}-last`}
                  {...(item.required ? { required: true } : null)}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-row gap-6 justify-between w-max">
              <p className=" w-96 self-center">{item.title}</p>
              <input
                className="container flex justify-center pl-4 pr-10 py-2"
                type={`${item.inputType}`}
                name={`${item.title}`}
                placeholder={`${item.placeHolder}`}
                id={`${item.title}`}
                size="34"
                {...(item.required ? { required: true } : null)}
              />
            </div>
          )}
        </div>
      );
    });
  }

  return (
    <form action="" className="fields flex flex-col gap-10 w-fit">
      <RenderInputField />
      <div className="flex justify-end">
        <input
          type="submit"
          value="Save Changes"
          className="submit-btn flex justify-center self-center"
        />
      </div>
    </form>
  );
}
