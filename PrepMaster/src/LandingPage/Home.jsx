import CustomButton from "../Components/CustomButton";
import { NavLink } from "react-router-dom";
import Signup from "../Signup/Signup";
import DemosContainer from "./DemoContainer";
import { Companies } from "./Companies";
import back from "./../assets/half-image.png";

export default function Home() {
  return (
    <div id="home">
      <div className="flex flex-col items-center pt-36 gap-6 mt-32">
        <div class="gradient-text">Start Acing Your Exams Today</div>
        <div className="text-center text-lg opacity-75 w-2/6 ">
          Join 10,000+ students in securing your top spot in the exit exam in
          various fields from Computer Science to Accounting
        </div>
        <NavLink to="Signup" element={<Signup />}>
          <CustomButton text={"Try for free"} padding={"0.8rem 3.4rem"} />
        </NavLink>
      </div>
      <div className="flex flex-row  justify-center pt-36 ">
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
