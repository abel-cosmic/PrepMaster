import Chapa from "./../assets/Chapa Logo 2.svg";
import CBE from "./../assets/Commercial Bank of Ethiopia Logo 1.svg";
import AWASH from "./../assets/Awash International Bank ( No text ) Logo.svg";
import ABYSSINIA from "./../assets/Bank of Abyssinia Logo.svg";
import TELEBIRR from "./../assets/TeleBirr Logo.svg";
import HIBRET from "./../assets/Hibret Bank ( No text ) Logo 1.svg";

export function Payments() {
  return (
    <div className="flex flex-col justify-evenly items-center content-between">
      <div className="md:text-5xl max-md:text-3xl font-semibold">
        Payment Made With{" "}
        <span className="span md:text-5xl max-md:text-3xl font-semibold">
          {" "}
          Ease
        </span>
      </div>
      <div className="flex flex-row justify-evenly max-md:gap-6 md:gap-20  items-center md:mt-20 max-md:mt-6 max-md:px-6  max-md:w-2/3  ">
        <img src={Chapa} className="w-1/2" />
        <img src={CBE} className="w-1/4" />
        <img src={AWASH} className="w-1/4" />
        <img src={ABYSSINIA} className="w-1/4" />
        <img src={TELEBIRR} className="w-1/4" />
        <img src={HIBRET} className="w-1/4" />
      </div>
    </div>
  );
}
