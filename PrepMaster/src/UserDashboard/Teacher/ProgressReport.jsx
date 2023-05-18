import ProgressAnalytics from "../../assets/ProgressAnalytics.svg";

export default function ProgressReport() {
  return (
    <div className="container pr-16 pl-4 py-4 mt-4">
      <p className="font-medium text-lg">Progrss Report</p>
      <img src={ProgressAnalytics} alt="" />
    </div>
  );
}
