import Chapa from "./../assets/Chapa Logo 2.svg";
import AAU from "./../assets/Addis Ababa University .svg";
import BDU from "./../assets/Bahir Dar University .svg";
import HEUC from "./../assets/HEUC.svg";
import ASTU from "./../assets/AASTU.svg";

export function Companies() {
  return (
    <div className="flex flex-row md:justify-evenly max-md:gap-6  items-center md:mt-20 max-md:mt-6 max-md:px-6 max-md:w-2/3 ">
      <img src={Chapa} className=" max-md:w-1/4 " />
      <img src={AAU} className=" max-md:w-1/4 " />
      <img src={BDU} className=" max-md:w-1/4 " />
      <img src={HEUC} className=" max-md:w-1/4 " />
      <img src={ASTU} className=" max-md:w-1/4 " />
    </div>
  );
}
