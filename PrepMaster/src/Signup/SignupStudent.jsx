export default function SignupStudent() {
  const inputs = [
    { title: "Department", type: "text", placeholder: "Eg: Computer Science" },
    { title: "Email", type: "email", placeholder: "Eg:abc123@gmail.com" },
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
            required
          />
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-4 w-fit">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm">First Name</p>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Eg: Ibrahim"
            className="container pl-4 pr-16 py-2"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Last Name</p>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Eg: Ibrahim"
            className="container pl-4 pr-16 py-2"
            required
          />
        </div>
      </div>
      <RenderInputs />
    </div>
  );
}
