import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import tick from "../assets/tick.svg";
import CustomButton from "../Components/CustomButton";
import SignupOrganization from "./SignupOrganization";
import LandingPage from "../LandingPage/LandingPage";

export default function Signup() {
  const features = [
    "Question curated by professionals",
    "Reasonable Pricing",
    "Up to date questions",
  ];
  const inputs = [
    {
      title: "Department",
    },
  ];

  const RenderFeatures = () => {
    return features.map((feature) => {
      return (
        <div key={feature} className="flex flex-row gap-4">
          <img src={tick} />
          <p className="font-medium">{feature}</p>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-row md:h-screen  max-md:self-center">
      <div className="flex flex-col justify-between w-full ">
        <div className="flex flex-col pt-10 px-10 max-md:px-10 max-md:pt-10 max-md:pb-0 gap-4 w-full">
          <NavLink to="/" element={<LandingPage />}>
            <img
              class="md:w-1/4 max-md:w-5/6 max-md:m-auto"
              src={logo}
              alt="logo"
            />
          </NavLink>

          <div className="signup-header flex flex-col self-center gap-2 mb-2">
            <p className="text-3xl flex justify-center font-semibold max-md:mt-4">
              Create an account
            </p>
            <p className="text-sm opacity-50">
              By creating an account you get access to our courses
            </p>
          </div>
          <div className="signup-nav flex flex-row justify-center gap-16">
            <NavLink to="" end className="self-center">
              <p className="text-sm">Student</p>
            </NavLink>
            <NavLink
              to="SignupOrganization"
              className="self-center"
              element={<SignupOrganization />}
            >
              <p className="text-sm">Organization</p>
            </NavLink>
          </div>
          <Outlet />

          <p className="text-xs opacity-50 px-6 md:my-12 max-md:my-6">
            © PrepMaster all rights reserved
          </p>
        </div>
      </div>
      <div className="max-md:hidden signup p-10 flex flex-col gap-6 justify-end pb-10">
        <p className="text-4xl font-bold w-3/4">
          Join 25,000+ students determined to ace their exit exams
        </p>
        <div className="flex flex-col gap-6">
          <RenderFeatures />
        </div>
      </div>
    </div>
  );
}
