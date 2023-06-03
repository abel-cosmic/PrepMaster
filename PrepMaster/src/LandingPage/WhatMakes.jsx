import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export function WhatMakes() {
  return (
    <div id="services">
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="w-full flex felx-col justify-center  md:mt-52 md:text-5xl max-md:mt-6 max-md:text-2xl font-semibold "
      >
        <p>
          What Makes Us
          <span className="span"> Different </span>
        </p>
      </div>
    </div>
  );
}
