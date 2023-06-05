import Logo from "./../assets/logo.svg";
import CustomButton from "../Components/CustomButton";
import { NavLink } from "react-router-dom";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Navigation() {
  const handleScrollTo = (tag) => {
    const element = document.getElementById(tag);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="max-md:hidden flex flex-row justify-between self-center fixed-nav z-50">
        <img
          className="left w-72 ml-5"
          src={Logo}
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          alt="logo"
        />
        <ul
          className="flex felx-row gap-10 self-center text-sm"
          style={{ fontWeight: "500" }}
        >
          <li
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="50"
          >
            <button onClick={() => handleScrollTo("home")} className="links">
              HOME
            </button>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <button
              href="#"
              onClick={() => handleScrollTo("services")}
              className="links"
            >
              SERVICES
            </button>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <button onClick={() => handleScrollTo("pricing")} className="links">
              PRICING
            </button>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <button onClick={() => handleScrollTo("contact")} className="links">
              CONTACT
            </button>
          </li>
        </ul>
        <div className="flex flex-row gap-6 justify-between items-center">
          <NavLink
            to="Signin"
            element={<Signin />}
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="250"
          >
            <div className="sign-in text-sm px-4 py-2">Sign in</div>
          </NavLink>
          <NavLink
            to="Signup"
            element={<Signup />}
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="350"
          >
            <CustomButton text={"Try for free"} padding={"0.7rem 1.7rem"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
