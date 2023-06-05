import Chapa from "./../assets/Chapa Logo 2.svg";
import CBE from "./../assets/Commercial Bank of Ethiopia Logo 1.svg";
import AWASH from "./../assets/Awash International Bank ( No text ) Logo.svg";
import ABYSSINIA from "./../assets/Bank of Abyssinia Logo.svg";
import TELEBIRR from "./../assets/TeleBirr Logo.svg";
import HIBRET from "./../assets/Hibret Bank ( No text ) Logo 1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export function Payments() {
  return (
    <div className="flex flex-col justify-evenly items-center content-between">
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="md:text-5xl max-md:text-2xl font-semibold"
      >
        Payment Made With{" "}
        <span className="span md:text-5xl max-md:text-2xl font-semibold">
          {" "}
          Ease
        </span>
      </div>
      <div className="flex flex-row justify-evenly max-md:gap-6 md:gap-20  items-center md:mt-20 max-md:mt-6 max-md:px-6  max-md:w-1/2  ">
        <img
          src={Chapa}
          className="w-1/2"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="200"
        />
        <img
          src={CBE}
          className="w-1/4"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="300"
        />
        <img
          src={AWASH}
          className="w-1/4"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="400"
        />
        <img
          src={ABYSSINIA}
          className="w-1/4"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="500"
        />
        <img
          src={TELEBIRR}
          className="w-1/4"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="600"
        />
        <img
          src={HIBRET}
          className="w-1/4"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="700"
        />
      </div>
    </div>
  );
}
