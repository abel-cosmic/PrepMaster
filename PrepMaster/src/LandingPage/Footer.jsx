import prepmaster from "./../assets/WhiteLogo.svg";
import instagram from "./../assets/instagram 1.svg";
import twitter from "./../assets/twitter 1.svg";
import linkedin from "./../assets/linkedin 1.svg";
import facebook from "./../assets/facebook 1.svg";
import message from "./../assets/memo 1.svg";
import whatsup from "./../assets/whatsapp 1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const lists = [
  {
    id: 1,
    list1: "Information",
    list2: "Services",
    list3: "Pricing",
    list4: "Testimonials",
  },
  {
    id: 2,
    list1: "Help",
    list2: "Customer Support",
    list3: "Privacy Policy",
    list4: "Terms & Conditions",
  },
];

export function Footer() {
  return (
    <div className=" flex flex-col justify-between pt-10 pb-2 footer-new mt-20 ">
      <div className="md:px-12 max-md:px-6 flex md:flex-row max-md:flex-col max-md:gap-6 md:justify-between md:mr-8">
        <img
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="1000"
          src={prepmaster}
          alt="prepmaster"
          className=" max-md:w-[10rem] md:self-start"
        />
        <div className="flex flex-row justify-between md:w-[27rem] max-md:px-0">
          {lists.map((list, index) => (
            <div className="flex flex-col justify-between login" key={list.id}>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="1200"
                className="font-medium text-white md:text-lg max-md:text-base login linked"
              >
                {list.list1}
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="1400"
                className="text-white md:text-base max-md:text-sm login linked"
              >
                {list.list2}
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="1600"
                className="text-white md:text-base max-md:text-sm login linked"
              >
                {list.list3}
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="1800"
                className="text-white md:text-base max-md:text-sm login linked"
              >
                {list.list4}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:justify-between max-md:justify-evenly h-44 md:w-[30rem] max-md:w-[23rem] ">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="2000"
            className="text-white text-lg font-medium"
          >
            Subscribe to our newsletter
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="2200"
            className="text-white md:text-base max-md:text-sm max-md:text-justify w-5/6 "
          >
            Get all of the latest education news about our services and offers
            by subscribing to our weekly newsletter.
          </div>
          <form
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="2400"
            className="flex flex-row w-full md:justify-end max-md:my-6 "
          >
            <input
              type="text"
              className="md:w-full max-md:w-2/3 bg-transparent last pl-4 placeholder-white focus::placeholder-white"
              placeholder="Enter Email Address"
            />
            <input
              type="submit"
              value="Send"
              className="black-btn bg-[#2e2e2e] text-white py-4 px-6 rounded-r-lg"
            />
          </form>
        </div>
      </div>
      <div className="border-t md:mt-8 py-4 px-12 flex flex-row max-md:flex-col justify-between items-center md:w-full  flex-shrink-0">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="2200"
          className="text-white text-base max-md:text-sm"
        >
          PrepMasters © 2023 All rights reserved
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="2400"
          className="text-white text-lg max-md:text-sm"
        >
          Made by Trident Technologies
        </div>
        <div className="md:flex md:flex-row md:gap-6  max-md:gap-0 max-md:hidden max-md:w-[1rem] ">
          <a
            href="#prepmaster-instagram"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="2500"
          >
            <img src={instagram} alt="instagram" className="login" />
          </a>
          <a
            href="#prepmaster-twitter"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="2600"
          >
            <img src={twitter} alt="twitter" className="login" />
          </a>
          <a
            href="#prepmaster-linkedin"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="2700"
          >
            <img src={linkedin} alt="linkedin" className="login" />
          </a>
          <a
            href="#prepmaster-facebook"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="2800"
          >
            <img src={facebook} alt="facebook" className="login" />
          </a>
          <a
            href="#prepmaster-message"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="2900"
          >
            <img src={message} alt="message" className="login" />
          </a>
          <a
            href="#prepmaster-whatsup"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="3000"
          >
            <img src={whatsup} alt="whatsup" className="login" />
          </a>
        </div>
      </div>
    </div>
  );
}
