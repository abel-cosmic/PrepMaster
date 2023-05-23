import Logo from "./../assets/logo.svg";
import CustomButton from "../Components/CustomButton";
import { NavLink } from "react-router-dom";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";

export default function Navigation() {
  const handleScrollTo = (tag) => {
    const element = document.getElementById(tag);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="max-md:hidden flex flex-row justify-between self-center fixed-nav z-50">
        <img src={Logo} alt="logo" className="left w-72 ml-5" />
        <ul
          className="flex felx-row gap-10 self-center text-sm"
          style={{ fontWeight: "500" }}
        >
          <li>
            <button onClick={() => handleScrollTo("home")} className="links">
              HOME
            </button>
          </li>
          <li>
            <button
              href="#"
              onClick={() => handleScrollTo("services")}
              className="links"
            >
              SERVICES
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollTo("pricing")} className="links">
              PRICING
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollTo("contact")} className="links">
              CONTACT
            </button>
          </li>
        </ul>
        <div className="flex felx-row gap-6 justify-between items-center">
          <NavLink to="Signin" element={<Signin />}>
            <div className="sign-in text-sm px-4 py-2">Sign in</div>
          </NavLink>
          <NavLink to="Signup" element={<Signup />}>
            <CustomButton text={"Try for free"} padding={"0.7rem 1.7rem"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
