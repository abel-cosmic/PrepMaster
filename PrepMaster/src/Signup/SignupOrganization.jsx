export default function SignupOrganization() {
  const inputs = [
    {
      title: "Organization Name",
      type: "text",
      placeholder: "Eg: Hope Enterprise University College",
    },
    { title: "Work Email", type: "email", placeholder: "Eg:abc123@gmail.com" },
    { title: "Password", type: "password", placeholder: "Enter password" },
  ];

  const RenderInputs = () => {
    return inputs.map((item) => {
      return (
        <div key={item.title} className="flex flex-col gap-2">
          <p className="text-sm">{item.title}</p>
          <input
            type={item.type}
            name={item.title}
            id={item.title}
            placeholder={item.placeholder}
            className="container pl-4 pr-16 py-2"
            size="52"
            required
          />
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <RenderInputs />
    </div>
  );
}
