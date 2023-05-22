import Filter from "../../assets/Filter.svg";
import ExamRenderer from "./ExamsRenderer";

export default function ViewExams() {
  return (
    <div className="student-exam flex flex-col mt-10">
      <div className="flex flex-row justify-between">
        <p className="text-xl font-medium">View Exams</p>
        <div className="flex flex-row gap-2">
          <p>Filter</p>
          <img src={Filter} alt="Filter" />
        </div>
      </div>
      <p className="mt-2">Here are all the exams you've created</p>
      <div className="mt-10">
        <ExamRenderer />
      </div>
    </div>
  );
}
