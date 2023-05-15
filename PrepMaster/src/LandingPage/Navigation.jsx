import Button from "@mui/material/Button";
import Logo from "./../assets/logo.svg";
import CustomButton from "../Components/CustomButton";
import { NavLink } from "react-router-dom";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";
export default function Navigation() {
  return (
    <div className=" mx-6 mt-10 flex flex-row justify-between self-center  ">
      <img src={Logo} alt="logo" className="left w-72 ml-5" />
      <ul
        className="flex felx-row gap-10 self-center text-sm"
        style={{ fontWeight: "500" }}
      >
        <li>
          <a href="" className="links">
            HOME
          </a>
        </li>
        <li>
          <a href="" className="links">
            SERVICES
          </a>
        </li>
        <li>
          <a href="" className="links">
            PRICING
          </a>
        </li>
        <li>
          <a href="" className="links">
            CONTACT
          </a>
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
  );
}
