import CustomButton from "../Components/CustomButton";
import error from "../assets/error404.svg";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4">
      <img src={error} alt="error" className="md:w-1/4" />
      <p className="md:text-4xl max-md:text-2xl">Oh no 😥 </p>
      <p className="md:text-2xl">We could'nt find the page please go back</p>
      <div onClick={back}>
        <CustomButton text="Go Back " padding={"1rem 3rem"} />
      </div>
    </div>
  );
}
