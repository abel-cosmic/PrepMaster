export default function OverViewContainer() {
  const analytics = [
    {
      title: "Total Questions Solved",
      value: 2541, // this value will be fetched from the database
    },
    {
      title: "Total Exams Finished",
      value: 2541, // this value will be fetched from the database
    },
    {
      title: "Question Success Rate",
      value: 2541, // this value will be fetched from the database
    },
  ];

  return analytics.map((item) => {
    return (
      <div key={item.title} className="py-4 pr-24 pl-4 container w-full">
        <p className="text-lg font-medium max-md:text-md">{item.title}</p>
        <p className="text-3xl font-bold max-md:text-base">{item.value}</p>
      </div>
    );
  });
}
