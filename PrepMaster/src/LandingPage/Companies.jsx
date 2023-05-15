import Chapa from "./../assets/Chapa Logo 2.svg";
import AAU from "./../assets/Addis Ababa University .svg";
import BDU from "./../assets/Bahir Dar University .svg";
import HEUC from "./../assets/HEUC.svg";
import ASTU from "./../assets/AASTU.svg";



export function Companies(){
    return(
        <div className="flex flex-row justify-evenly items-center mt-20">
        <img src={Chapa} className="w-72" />
        <img src={AAU} className="w-28" />
        <img src={BDU} className="w-28" />
        <img src={HEUC} className="w-48" />
        <img src={ASTU} className="w-72" />
      </div>
    );
}