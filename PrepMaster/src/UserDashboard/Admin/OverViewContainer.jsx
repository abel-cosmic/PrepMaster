export default function OverViewContainer() {
  const overviewData = [
    {
      title: "Total Students",
      value: "25,000",
    },
    {
      title: "Total Lecturers",
      value: "35",
    },
    {
      title: "Total Courses",
      value: "35",
    },
    {
      title: "Total Departments",
      value: "15",
    },
  ];

  return overviewData.map((data) => {
    return (
      <div className="container flex flex-col gap-2 pl-4  py-4 self-center w-full ">
        <p className="text-lg font-medium ">{data.title}</p>
        <p className="text-4xl font-bold">{data.value}</p>
      </div>
    );
  });
}
