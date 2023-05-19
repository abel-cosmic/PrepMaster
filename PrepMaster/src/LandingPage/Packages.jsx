import CustomButton from "../Components/CustomButton";
import unfilledStar from "./../assets/unfilled-star.svg";
import filledStar from "./../assets/fill-star.svg";
import { NavLink } from "react-router-dom";
import Signup from "../Signup/Signup";
const packages = [
  {
    id: 1,
    type: "Free",
    price: "0 ETB",
    list1: "Access to 1 exam per course",
    list2: "10 Answer Feedback",
    list3: "Selected Model Exams",
    list4: "Free Customer Support",
    text: "Try for free",
  },
  {
    id: 2,
    type: "Student Premium",
    price: "24.99 ETB/month",
    list1: "Unlimited Access",
    list2: "Unlimited Feedback",
    list3: "All Models Exams",
    list4: "AI Based Performance Meter",
    text: "Sign up",
  },
  {
    id: 3,
    type: "Organization Premium",
    price: "84.99 ETB/month",
    list1: "Unlimited Contribution",
    list2: "Unlimited Question Creation",
    list3: "Unlimited Students",
    list4: "User Analytics",
    text: "Sign up",
  },
];

export function Packages() {
  return (
    <div className="flex md:flex-row max-md:flex-col justify-evenly md:mt-20 mx-10 md:mb-32 max-md:my-6 max-md:gap-6">
      {packages.map((pkg) => (
        <div
          className={`flex flex-col items-center justify-evenly ${
            pkg.id === 1
              ? "bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF]"
              : "bg-gradient-to-r from-[#60BFCD] via-[#60BFCD] to-[#60BFCD]"
          } md:py-12 md:px-16 max-md:py-4 max-md:px-6  rounded-3xl shadow-lg`}
          key={pkg.id}
        >
          <h1
            className={`${
              pkg.id === 1 ? "text-[#2e2e2e]" : "text-white"
            } mb-4 md:text-2xl max-md:text-xl font-light`}
          >
            {pkg.type}
          </h1>
          <h2
            className={`${
              pkg.id === 1 ? "text-[#2e2e2e]" : "text-white"
            } md:mb-16 max-md:mb-4 md:text-3xl max-md:text-2xl font-bold`}
          >
            {pkg.price}
          </h2>
          <ul>
            <li
              className={`${
                pkg.id === 1 ? "text-[#2e2e2e]" : "text-white"
              } mb-4 flex flex-row gap-4 max-md:text-sm`}
            >
              {pkg.id === 1 ? (
                <img
                  src={unfilledStar}
                  alt="unfilled star"
                  className="max-md:w-1/12"
                />
              ) : (
                <img
                  src={filledStar}
                  alt="filled star"
                  className="max-md:w-1/12"
                />
              )}{" "}
              {pkg.list1}
            </li>
            <li
              className={`${
                pkg.id === 1 ? "text-[#2e2e2e]" : "text-white"
              } mb-4 flex flex-row gap-4 max-md:text-sm`}
            >
              {pkg.id === 1 ? (
                <img
                  src={unfilledStar}
                  alt="unfilled star"
                  className="max-md:w-1/12"
                />
              ) : (
                <img
                  src={filledStar}
                  alt="filled star"
                  className="max-md:w-1/12"
                />
              )}{" "}
              {pkg.list2}
            </li>
            <li
              className={`${
                pkg.id === 1 ? "text-[#2e2e2e]" : "text-white"
              } mb-4 flex flex-row gap-4 max-md:text-sm`}
            >
              {pkg.id === 1 ? (
                <img
                  src={unfilledStar}
                  alt="unfilled star"
                  className="max-md:w-1/12"
                />
              ) : (
                <img
                  src={filledStar}
                  alt="filled star"
                  className="max-md:w-1/12"
                />
              )}{" "}
              {pkg.list3}
            </li>
            <li
              className={`${
                pkg.id === 1 ? "text-[#2e2e2e]" : "text-white"
              } md:mb-16 max-md:mb-6 flex flex-row gap-4 max-md:text-sm`}
            >
              {pkg.id === 1 ? (
                <img
                  src={unfilledStar}
                  alt="unfilled star"
                  className="max-md:w-1/12"
                />
              ) : (
                <img
                  src={filledStar}
                  alt="filled star"
                  className="max-md:w-1/12"
                />
              )}{" "}
              {pkg.list4}
            </li>
          </ul>
          <NavLink to="Signup" element={<Signup />}>
            <CustomButton text={pkg.text} padding={"0.7rem 1.7rem"} />
          </NavLink>
        </div>
      ))}
    </div>
  );
}
