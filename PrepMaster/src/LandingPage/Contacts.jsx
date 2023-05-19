import phone from "./../assets/mobile-portrait.svg";
import mail from "./../assets/mail.svg";
import instagram from "./../assets/instagram.svg";
import twitter from "./../assets/twitter.svg";
import linkedin from "./../assets/linkedin.svg";
import facebook from "./../assets/facebook.svg";
import message from "./../assets/memo.svg";
import whatsup from "./../assets/whatsapp.svg";
import maper from "./../assets/Mapsicle Map.svg";
import CustomButton from "../Components/CustomButton";
export function Contacts() {
  return (
    <div id="contacts">
      <p className="md:text-5xl max-md:text-3xl md:mt-44 flex font-semibold justify-center md:justify-start md:pl-16">
        Need Additional <span className="span">Information?</span>
      </p>

      <div
        className="flex md:flex-row md:justify-around md:gap-72 max-md:flex-col md:mt-16 md:mb-14 max-md:my-16 "
        id="contact"
      >
        <div className="flex flex-col gap-6 max-md:mx-6 ">
          <div>Fill the form 📝 or give us a call 📞</div>
          <div className="flex md:flex-row max-md:flex-col md:gap-20 max-md:gap-6">
            <div className="flex flex-row gap-4">
              <img src={phone} alt="phone" />
              <div>+2511198456321</div>
            </div>
            <div className="flex flex-row gap-4">
              <img src={mail} alt="mail" />
              <div>+contact@prepmasters.com</div>
            </div>
          </div>
          <div>Follow us on</div>
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
          <img src={maper} alt="map" className="max-md:w-11/12" />
        </div>
        <form className="flex flex-col justify-between mt-12 w-max max-md:mx-6 md:gap-6 max-md:gap-4">
          <div className="flex md:flex-row max-md:flex-col max-md:gap-4 md:gap-6 w-fit justify-between ">
            <input
              type="text"
              placeholder="Full Name"
              className=" py-4 md:pl-6 max-md:pl-4 container md:w-72 max-md:w-[23rem]   input-field"
            />
            <input
              type="text"
              placeholder="Email"
              className="py-4 md:pl-6 max-md:pl-4 container md:w-72 max-md:w-[23rem]   input-field"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="  md:w-full py-4 md:pl-6 max-md:pl-4 container max-md:w-[23rem]  input-field"
          />
          <input
            type="text"
            placeholder="Message"
            className=" container pt-6 md:pl-6  max-md:pl-4 md:pb-72 max-md:pb-44 md:w-full max-md:w-[23rem] input-field"
          />
          <input type="submit" value="Send" className="submit-btn self-end" />
        </form>
      </div>
    </div>
  );
}
