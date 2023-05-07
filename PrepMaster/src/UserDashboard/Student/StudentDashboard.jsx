import OverViewContainer from "./OverViewContainer";
import DailyQuestions from "./DailyQuestions";
import ProgressReport from "./ProgressReport";

export default function StudentDashboard() {
  return (
    <div className="flex flex-col gap-4 mt-10 w-fit" id="student-dashboard">
      <div>
        <p className="text-xl font-medium">Dashboard</p>
      </div>
      <p>
        Hello, Mohammed -{" "}
        <span className="opacity-50">Let's get some work done</span>
      </p>
      <div className="flex flex-row gap-6">
        <OverViewContainer />
      </div>
      <p className="text-lg font-medium mt-6">Daily Questions</p>
      <div className="flex flex-row gap-6">
        <DailyQuestions />
      </div>
      <ProgressReport />
    </div>
  );
}
