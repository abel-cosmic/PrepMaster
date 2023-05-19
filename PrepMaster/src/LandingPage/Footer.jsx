import BlackButton from "../Components/BlackButton";
import CustomButton from "../Components/CustomButton";
import prepmaster from "./../assets/WhiteLogo.svg";
import instagram from "./../assets/instagram 1.svg";
import twitter from "./../assets/twitter 1.svg";
import linkedin from "./../assets/linkedin 1.svg";
import facebook from "./../assets/facebook 1.svg";
import message from "./../assets/memo 1.svg";
import whatsup from "./../assets/whatsapp 1.svg";

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
    <div className="w-full flex flex-col justify-between pt-10 pb-2 footer-new mt-20 h-[30rem]">
      <div className="px-12 flex flex-row justify-between mr-8">
        <img src={prepmaster} alt="prepmaster" style={{ height: "3rem" }} />
        <div
          className="flex flex-row justify-between"
          style={{ width: "35rem" }}
        >
          {lists.map((list) => (
            <div className="flex flex-col justify-between login" key={list.id}>
              <div className="font-medium text-white text-lg login linked">
                {list.list1}
              </div>
              <div className="text-white text-base login linked">
                {list.list2}
              </div>
              <div className="text-white text-base login linked">
                {list.list3}
              </div>
              <div className="text-white text-base login linked">
                {list.list4}
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex flex-col justify-between h-44"
          style={{ width: "26rem" }}
        >
          <div className="text-white text-lg font-medium">
            Subscribe to our newsletter
          </div>
          <div className="text-white text-base">
            Get all of the latest education news about our services and offers
            by subscribing to our weekly newsletter.
          </div>
          <div className="flex flex-row w-full">
            <input
              type="text"
              className="w-full bg-transparent last pl-4 placeholder-white focus::placeholder-white"
              placeholder="Enter Email Address"
            />
            <BlackButton />
          </div>
        </div>
      </div>
      <div className="border-t py-4 px-12 flex flex-row justify-between items-center">
        <div className="text-white text-base">
          PrepMasters © 2023 All rights reserved
        </div>
        <div className="text-white text-lg">Made by Trident Technologies</div>
        <div className="flex flex-row gap-6">
          <a href="#prepmaster-instagram">
            <img src={instagram} alt="instagram" className="login" />
          </a>
          <a href="#prepmaster-twitter">
            <img src={twitter} alt="twitter" className="login" />
          </a>
          <a href="#prepmaster-linkedin">
            <img src={linkedin} alt="linkedin" className="login" />
          </a>
          <a href="#prepmaster-facebook">
            <img src={facebook} alt="facebook" className="login" />
          </a>
          <a href="#prepmaster-message">
            <img src={message} alt="message" className="login" />
          </a>
          <a href="#prepmaster-whatsup">
            <img src={whatsup} alt="whatsup" className="login" />
          </a>
        </div>
      </div>
    </div>
  );
}
