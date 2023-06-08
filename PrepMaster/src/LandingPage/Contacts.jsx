import phone from "./../assets/mobile-portrait.svg";
import mail from "./../assets/mail.svg";
import instagram from "./../assets/instagram.svg";
import twitter from "./../assets/twitter.svg";
import linkedin from "./../assets/linkedin.svg";
import facebook from "./../assets/facebook.svg";
import message from "./../assets/memo.svg";
import whatsup from "./../assets/whatsapp.svg";
import maper from "./../assets/Mapsicle Map.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export function Contacts() {
  return (
    <div id="contacts">
      <p
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="500"
        className="md:text-5xl max-md:text-2xl md:mt-44 flex font-semibold justify-center md:justify-start md:pl-16"
      >
        Need Additional <span className="span">Information?</span>
      </p>

      <div
        className="flex md:flex-row md:justify-around md:gap-32 max-md:flex-col md:mt-16 md:mb-14 max-md:my-16 "
        id="contact"
      >
        <div className="flex flex-col gap-6 max-md:mx-6 ">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="700"
            className="text-sm"
          >
            Fill the form 📝 or give us a call 📞
          </div>
          <div className="flex md:flex-row max-md:flex-col md:gap-20 max-md:gap-6 text-sm">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              data-aos-delay="900"
              className="flex flex-row gap-4"
            >
              <img src={phone} alt="phone" />
              <div className="text-sm">+2511198456321</div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              data-aos-delay="1100"
              className="flex flex-row gap-4"
            >
              <img src={mail} alt="mail" />
              <div className="text-sm">+contact@prepmasters.com</div>
            </div>
          </div>
          <div 
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="text-sm">
            Follow us on
            </div>
          <div className="flex flex-row gap-6">
            <a href="#prepmaster-instagram">
              <img
                src={instagram}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="1200"
                alt="instagram"
                className="login"
              />
            </a>
            <a href="#prepmaster-twitter">
              <img
                src={twitter}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="1300"
                alt="twitter"
                className="login"
              />
            </a>
            <a href="#prepmaster-linkedin">
              <img
                src={linkedin}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="1400"
                alt="linkedin"
                className="login"
              />
            </a>
            <a href="#prepmaster-facebook">
              <img
                src={facebook}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="1500"
                alt="facebook"
                className="login"
              />
            </a>
            <a href="#prepmaster-message">
              <img
                src={message}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="1600"
                alt="message"
                className="login"
              />
            </a>
            <a href="#prepmaster-whatsup">
              <img
                src={whatsup}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="1700"
                alt="whatsup"
                className="login"
              />
            </a>
          </div>
          <iframe
            className="rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6256.250506600523!2d38.71797160763153!3d8.9545593713985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b813e5ca20165%3A0x23b28360006aa821!2sHope%20University%20College%20hall!5e0!3m2!1sen!2set!4v1686243415813!5m2!1sen!2set"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className="flex flex-col justify-between mt-12 w-max max-md:mx-6 md:gap-6 max-md:gap-4">
          <div className="flex md:flex-row max-md:flex-col max-md:gap-4 md:gap-6 w-fit justify-between ">
            <input
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              data-aos-delay="1000"
              type="text"
              placeholder="Full Name"
              className=" py-4 md:pl-6 max-md:pl-4 container md:w-72 max-md:w-[23rem]   input-field"
            />
            <input
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              data-aos-delay="1200"
              type="text"
              placeholder="Email"
              className="py-4 md:pl-6 max-md:pl-4 container md:w-72 max-md:w-[23rem]   input-field"
            />
          </div>
          <input
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="1400"
            type="text"
            placeholder="Subject"
            className="  md:w-full py-4 md:pl-6 max-md:pl-4 container max-md:w-[23rem]  input-field"
          />
          <input
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="1600"
            type="text"
            placeholder="Message"
            className=" container pt-6 md:pl-6  max-md:pl-4 md:pb-72 max-md:pb-44 md:w-full max-md:w-[23rem] input-field"
          />
          <input 
          type="submit" 
          value="Send" 
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-delay="600"
          className="submit-btn self-end" />
        </form>
      </div>
    </div>
  );
}
