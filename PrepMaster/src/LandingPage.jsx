import Navigation from "./Navigation";
import CustomButton from "./Components/CustomButton";
import Chapa from "./assets/Chapa Logo 2.svg";
import AAU from "./assets/Addis Ababa University .svg";
import BDU from "./assets/Bahir Dar University .svg";
import HEUC from "./assets/HEUC.svg";
import ASTU from "./assets/AASTU.svg";
export default function LandingPage() {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center pt-16 gap-10">
        <div class="gradient-text">Start Acing Your Exams Today</div>
        <div className="text-center description ">
          Join 10,000+ students in securing your top spot in the exit exam in
          various fields from Computer Science to Accounting
        </div>
        <div>
          <CustomButton text={"Try for free"} padding={"0.8rem 3.4rem"} />
        </div>
      </div>
      <div className="flex flex-row  justify-center pt-12 ">
        <span className="span"> Companies </span> and{" "}
        <span className="span"> Universities </span> Trust PrepMaster
      </div>
      <div className="flex flex-row justify-evenly items-center pt-10">
        <img src={Chapa} className="w-52" />
        <img src={AAU} className="w-28" />
        <img src={BDU} className="w-28" />
        <img src={HEUC} className="w-48" />
        <img src={ASTU} className="w-72" />
      </div>
    </div>
  );
}
