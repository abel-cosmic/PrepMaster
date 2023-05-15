import Chapa from "./../assets/Chapa Logo 2.svg";
import CBE from "./../assets/Commercial Bank of Ethiopia Logo 1.svg";
import AWASH from "./../assets/Awash International Bank ( No text ) Logo.svg";
import ABYSSINIA from "./../assets/Bank of Abyssinia Logo.svg";
import TELEBIRR from "./../assets/TeleBirr Logo.svg";
import HIBRET from "./../assets/Hibret Bank ( No text ) Logo 1.svg";



export function Payments(){
    return(
        <div className="flex flex-col justify-evenly items-center content-between">
            <div className="text-5xl font-semibold">Payment Made With <span className="span text-5xl font-semibold"> Ease</span></div>
            <div className="flex flex-row justify-evenly content-between mt-40 w-full">
                <img src={Chapa} className="w-72" />
                <img src={CBE} className="w-28" />
                <img src={AWASH} className="w-28" />
                <img src={ABYSSINIA}className="w-28"/>
                <img src={TELEBIRR} className="w-28" />
                <img src={HIBRET} className="w-28"/>
            </div>
        </div>
    );
}