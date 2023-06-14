import CustomButton from "../Components/CustomButton";
import { NavLink } from "react-router-dom";
import Signup from "../Signup/Signup";
import DemosContainer from "./DemoContainer";
import { Companies } from "./Companies";
import oval from "../assets/Oval.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Home() {
  return (
    <div id="home">
      <div className="absolute md:top-[-3rem] md:right-10 max-md:hidden">
        <img src={oval} alt="oval blur" />
      </div>
      <div className="flex flex-col items-center max-md:w-full md:pt-36 max-md:pt-12 max-md:mt-20 gap-6 md:mt-28">
        <div
          class="gradient-text max-md:font-extrabold max-md:w-3/4 text-center"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          Start Acing Your Exams Today
        </div>
        <div
          className="text-center md:text-base opacity-75 md:w-2/6 max-md:w-3/4 max-md:text-sm "
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="700"
        >
          Join 10,000+ students in securing your top spot in the exit exam in
          various fields from Computer Science to Accounting
        </div>
        <NavLink
          to="Signup"
          element={<Signup />}
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <CustomButton text={"Try for free"} padding={"0.8rem 3.4rem"} />
        </NavLink>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="1000"
        className="flex flex-row  justify-center md:pt-36 max-md:pt-14 "
      >
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
