import ProgressAnalytics from "../../assets/ProgressAnalytics.svg";

export default function ProgressReport() {
  return (
    <div className="container pr-16 pl-4 py-4 mt-4 max-md:h-[20rem]">
      <p className="font-medium text-lg max-md:text-2xl max-md:font-semibold">Progress Report</p>
      <img src={ProgressAnalytics} alt="" className="max-md:h-[20rem]"/>
    </div>
  );
}
