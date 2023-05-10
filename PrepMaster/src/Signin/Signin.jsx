import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import LandingPage from "../LandingPage";
import tick from "../assets/tick.svg";
import SigninTeacher from "./SigninTeacher";
import SigninOrganization from "./SigninOrganization";

export default function Signin() {
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
    <div className="flex flex-row">
      <div className="flex flex-row h-screen w-full">
        <div className="flex flex-col p-10 gap-6 w-full">
          <NavLink to="/" element={<LandingPage />}>
            <img class="w-1/4" src={logo} alt="logo" />
          </NavLink>

          <div className="signup-header flex flex-col self-center gap-2 mb-2 mt-14">
            <p className="text-3xl flex justify-center font-semibold">
              Glad to see you back
            </p>
            <p className="text-sm opacity-50">
              Login to your account to start on today's tasks
            </p>
          </div>
          <div className="signup-nav flex flex-row justify-center gap-16 ">
            <NavLink to="" end className="self-center">
              <p className="text-sm">Student</p>
            </NavLink>
            <NavLink
              to="SigninTeacher"
              className="self-center"
              element={<SigninTeacher />}
            >
              <p className="text-sm">Teacher</p>
            </NavLink>
            <NavLink
              to="SigninOrganization"
              className="self-center"
              element={<SigninOrganization />}
            >
              <p className="text-sm">Organization</p>
            </NavLink>
          </div>
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex justify-center">
              <Outlet />
            </div>

            <p className="text-xs opacity-50 px-6">
              © PrepMaster all rights reserved
            </p>
          </div>
        </div>
      </div>
      <div className="signin p-10 flex flex-col gap-6 justify-end pb-10">
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
