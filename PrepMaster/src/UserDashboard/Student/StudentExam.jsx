import Filter from "../../assets/Filter.svg";
import ExamRenderer from "./ExamRenderer";

export default function StudentExam() {
  return (
    <div className="student-exam flex flex-col mt-10">
      <div className="flex flex-row justify-between">
        <p className="text-xl font-medium">Exams</p>
        <div className="flex flex-row gap-2 pr-20 max-md:pr-4">
          <p>Filter</p>
          <img src={Filter} alt="Filter" />
        </div>
      </div>
      <p className="mt-2">Choose an exam and start grinding</p>
      <div className="mt-10">
        <ExamRenderer />
      </div>
    </div>
  );
}
