import phone from "./../assets/mobile-portrait.svg";
import mail from "./../assets/mail.svg";
import instagram from "./../assets/instagram.svg";
import twitter from "./../assets/twitter.svg";
import linkedin from "./../assets/linkedin.svg";
import facebook from "./../assets/facebook.svg";
import message from "./../assets/memo.svg";
import whatsup from "./../assets/whatsapp.svg";
import maper from "./../assets/Mapsicle Map.svg";
export function Contacts() {
  return (
    <div className="flex felx-row justify-evenly mt-14 mb-6 " id="contact">
      <div className="flex flex-col gap-6">
        <p className="text-5xl font-semibold">
          Need Additional <span className="span"> Infromation ? </span>
        </p>
        <div>Fill the form 📝 or give us a call 📞</div>
        <div className="flex flex-row gap-20">
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
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={facebook} alt="facebook" />
          <img src={message} alt="message" />
          <img src={whatsup} alt="whatsup" />
        </div>
        <img src={maper} alt="map" />
      </div>
      <div
        className="flex flex-col justify-between mt-12"
        style={{ width: "40rem" }}
      >
        <div className="flex felx-row justify-between ">
          <input
            type="text"
            placeholder="Full Name"
            size="28"
            className=" py-4 pl-6 rounded-xl border border-gray-300 input-field"
          />
          <input
            type="text"
            placeholder="Email"
            size="28"
            className="py-4 pl-6 rounded-xl border border-gray-300 input-field"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="  w-full py-4 pl-6 rounded-xl border border-gray-300 input-field"
        />
        <input
          type="text"
          placeholder="Message"
          className=" rounded-2xl  pt-6 pl-4  pb-72 w-full border border-gray-300 input-field"
        />
      </div>
    </div>
  );
}
