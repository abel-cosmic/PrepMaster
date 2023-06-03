import Chapa from "./../assets/Chapa Logo 2.svg";
import AAU from "./../assets/Addis Ababa University .svg";
import BDU from "./../assets/Bahir Dar University .svg";
import HEUC from "./../assets/HEUC.svg";
import ASTU from "./../assets/AASTU.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export function Companies() {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-delay="1000"
      className="flex flex-row md:justify-evenly max-md:gap-6  items-center md:mt-20 max-md:mt-6 max-md:px-6 max-md:w-2/3 "
    >
      <img
        src={Chapa}
        className=" max-md:w-1/4 "
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="1550"
      />
      <img
        src={AAU}
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="1650"
        className=" max-md:w-1/4 "
      />
      <img
        src={BDU}
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="1750"
        className=" max-md:w-1/4 "
      />
      <img
        src={HEUC}
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="1850"
        className=" max-md:w-1/4 "
      />
      <img
        src={ASTU}
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="1950"
        className=" max-md:w-1/4 "
      />
    </div>
  );
}
