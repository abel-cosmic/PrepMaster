import CustomButton from "../Components/CustomButton";
import { NavLink } from "react-router-dom";
import Signup from "../Signup/Signup";
import DemosContainer from "./DemoContainer";
import { Companies } from "./Companies";

export default function Home() {
  return (
    <div id="home">
      <div className="flex flex-col items-center max-md:w-full md:pt-36 max-md:pt-12 max-md:mt-20 gap-6 md:mt-32">
        <div class="gradient-text max-md:text-4xl max-md:font-extrabold max-md:w-3/4 text-center">
          Start Acing Your Exams Today
        </div>
        <div className="text-center md:text-base opacity-75 md:w-2/6 max-md:w-3/4 max-md:text-sm ">
          Join 10,000+ students in securing your top spot in the exit exam in
          various fields from Computer Science to Accounting
        </div>
        <NavLink to="Signup" element={<Signup />}>
          <CustomButton text={"Try for free"} padding={"0.8rem 3.4rem"} />
        </NavLink>
      </div>
      <div className="flex flex-row  justify-center md:pt-36 max-md:pt-16 ">
        <p>
          <span className="span"> Companies </span> and{" "}
          <span className="span"> Universities </span> Trust PrepMaster
        </p>
      </div>
      <Companies />
      <DemosContainer />
    </div>
  );
}
