import Button from "@mui/material/Button";
import Logo from "./assets/logo.svg";
import CustomButton from "./Components/CustomButton";
export default function Navigation() {
  return (
    <div className=" mx-6 mt-6 flex flex-row justify-between self-center  ">
      <img src={Logo} alt="logo" className="left w-72" />
      <ul
        className="flex felx-row justify-between gap-6 self-center text-xs"
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
        <div className="sign-in">Sign in</div>
        <CustomButton text={"Try for free"} padding={"0.5rem 1.7rem"} />
      </div>
    </div>
  );
}
