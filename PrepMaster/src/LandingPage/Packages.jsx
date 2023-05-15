import CustomButton from "../Components/CustomButton";
import unfilledStar from "./../assets/unfilled-star.svg";
import filledStar from "./../assets/fill-star.svg";
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
      <div className="flex flex-row justify-evenly  mt-20 px-60">
        {packages.map((pkg) => (
          <div
            className={`flex flex-col items-center ${
              pkg.id === 1
                ? "bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF]"
                : "bg-gradient-to-r from-[#60BFCD] via-[#60BFCD] to-[#60BFCD]"
            } py-16 px-16  rounded-3xl shadow-lg`}
            key={pkg.id}
          >
            <h1 className={`${pkg.id === 1 ? "text-black" : "text-white"} mb-4 text-2xl font-light`}>
              {pkg.type}
            </h1>
            <h2 className={`${pkg.id === 1 ? "text-black" : "text-white"} mb-16 text-3xl font-bold`}>
              {pkg.price}
            </h2>
            <ul>
              <li className={`${pkg.id === 1 ? "text-black" : "text-white"} mb-4 flex flex-row`}>
                {pkg.id === 1 ? (
                  <img src={unfilledStar} alt="unfilled star" />
                ) : (
                  <img src={filledStar} alt="filled star"/>
                )}{" "}
                {pkg.list1}
              </li>
              <li className={`${pkg.id === 1 ? "text-black" : "text-white"} mb-4 flex flex-row`}>
              {pkg.id === 1 ? (
                  <img src={unfilledStar} alt="unfilled star" />
                ) : (
                  <img src={filledStar} alt="filled star"/>
                )}{" "}
                {pkg.list2}
              </li>
              <li className={`${pkg.id === 1 ? "text-black" : "text-white"} mb-4 flex flex-row`}>
              {pkg.id === 1 ? (
                  <img src={unfilledStar} alt="unfilled star" />
                ) : (
                  <img src={filledStar} alt="filled star"/>
                )}{" "}
                {pkg.list3}
              </li>
              <li className={`${pkg.id === 1 ? "text-black" : "text-white"} mb-16 flex flex-row`}>
              {pkg.id === 1 ? (
                  <img src={unfilledStar} alt="unfilled star" />
                ) : (
                  <img src={filledStar} alt="filled star"/>
                )}{" "}
                {pkg.list4}
              </li>
            </ul>
            <CustomButton text={pkg.text} padding="0.7rem 1.7rem" />
          </div>
        ))}
      </div>
    );
  }
  
  