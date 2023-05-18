export default function MostAchievingDepartment() {
  const departments = [
    {
      name: "Computer Science",
      score: 90,
    },
    {
      name: "Computer Science",
      score: 90,
    },
    {
      name: "Computer Science",
      score: 90,
    },
    {
      name: "Computer Science",
      score: 90,
    },
    {
      name: "Computer Science",
      score: 90,
    },
  ];

  return (
    <div className="flex flex-col gap-4 container px-10 py-6">
      <p className="font-medium text-lg">Most Achieving Department</p>
      {departments.map((department, index) => {
        return (
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <p>{index + 1}.</p>
              <p>{department.name}</p>
            </div>
            <p className="font-medium">{department.score}</p>
          </div>
        );
      })}
    </div>
  );
}
