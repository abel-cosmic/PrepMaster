import CustomButton from "../Components/CustomButton";
import { useNavigate } from "react-router-dom";
import server from "../assets/server-animate.svg";

export default function Scaling() {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4">
      <img src={server} alt="error" className="md:w-1/4" />
      <p className="md:text-4xl max-md:text-2xl max-md:text-center">
        Oh no 😥 We could'nt process your request{" "}
      </p>
      <p className="md:text-2xl">
        We're scaling our servers to handle more requests.{" "}
      </p>
      <div onClick={back}>
        <CustomButton text="Go Back " padding={"1rem 3rem"} />
      </div>
    </div>
  );
}
