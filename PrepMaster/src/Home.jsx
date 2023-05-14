import CustomButton from "./Components/CustomButton";
import Chapa from "./assets/Chapa Logo 2.svg";
import AAU from "./assets/Addis Ababa University .svg";
import BDU from "./assets/Bahir Dar University .svg";
import HEUC from "./assets/HEUC.svg";
import ASTU from "./assets/AASTU.svg";
import { NavLink } from "react-router-dom";
import Signup from "./Signup/Signup";
import DemosContainer from "./DemoContainer";

export default function Home(){

    return(
        <div>
        <div className="flex flex-col items-center pt-36 gap-6">
            <div class="gradient-text">Start Acing Your Exams Today</div>
           <div className="text-center text-lg opacity-75 w-2/6 ">
          Join 10,000+ students in securing your top spot in the exit exam in
          various fields from Computer Science to Accounting
        </div>
        <NavLink to="Signup" element={<Signup />}>
          <CustomButton text={"Try for free"} padding={"0.8rem 3.4rem"} />
        </NavLink>
      </div>
      <div className="flex flex-row  justify-center pt-24 ">
        <p>
          <span className="span"> Companies </span> and{" "}
          <span className="span"> Universities </span> Trust PrepMaster
        </p>
      </div>
      <div className="flex flex-row justify-evenly items-center mt-20">
        <img src={Chapa} className="w-52" />
        <img src={AAU} className="w-28" />
        <img src={BDU} className="w-28" />
        <img src={HEUC} className="w-48" />
        <img src={ASTU} className="w-72" />
      </div>
      <DemosContainer/>
        </div>
    );
}