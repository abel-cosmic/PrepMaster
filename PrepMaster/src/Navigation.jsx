import Button from "@mui/material/Button";
import Logo from "./assets/logo.svg";
import CustomButton from "./Components/CustomButton";
export default function Navigation() {
  return (
    <div className=" mx-12 mt-8 flex flex-row justify-between self-center  ">
      <img src={Logo} alt="logo" className="left w-80" />
      <ul className="flex felx-row justify-between gap-6 self-center text-xs">
        <li>HOME</li>
        <li>SERVICES</li>
        <li>PRICING</li>
        <li>CONTACT</li>
      </ul>
      <div className="flex felx-row gap-10 justify-between items-center">
        <Button
          variant="text"
          style={{ color: "#2e2e2e", fontWeight: "400" }}
          sx={{ textTransform: "none" }}
        >
          Sign in
        </Button>
        <CustomButton text={"Try for free"} padding={"0.5rem 1rem"} />
      </div>
    </div>
  );
}
