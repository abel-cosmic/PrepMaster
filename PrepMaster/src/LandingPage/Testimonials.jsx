import { Splide, SplideSlide } from "@splidejs/react-splide";
import hana from "../assets/hana.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export  function Testimonials() {
  const testimonials = [
    {
      name: "Abebech Kebede",
      occupation: "Software Engineer Student in AAU",
      image: hana,
      word: "Lorem ipsum dolor sit amet consectetur. Urna lorem non habitant feugiat dui. Pellentesque convallis venenatis diam lacus euismod purus faucibus ullamcorper. Leo egestas mi sed pellentesque lectus. Morbi sit venenatis malesuada aliquet sodales aliquam. Semper elementum et sit euismod risus augue consectetur tortor nulla. Convallis egestas egestas tortor fringilla quis auctor.",
    },
    {
      name: "Abebech Kebede",
      occupation: "Software Engineer Student in AAU",
      image: hana,
      word: "Lorem ipsum dolor sit amet consectetur. Urna lorem non habitant feugiat dui. Pellentesque convallis venenatis diam lacus euismod purus faucibus ullamcorper. Leo egestas mi sed pellentesque lectus. Morbi sit venenatis malesuada aliquet sodales aliquam. Semper elementum et sit euismod risus augue consectetur tortor nulla. Convallis egestas egestas tortor fringilla quis auctor.",
    },
    {
      name: "Abebech Kebede",
      occupation: "Software Engineer Student in AAU",
      image: hana,
      word: "Lorem ipsum dolor sit amet consectetur. Urna lorem non habitant feugiat dui. Pellentesque convallis venenatis diam lacus euismod purus faucibus ullamcorper. Leo egestas mi sed pellentesque lectus. Morbi sit venenatis malesuada aliquet sodales aliquam. Semper elementum et sit euismod risus augue consectetur tortor nulla. Convallis egestas egestas tortor fringilla quis auctor.",
    },
  ];

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-delay="650"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-full flex felx-col md:justify-center md:mt-52 max-md:mt-16 md:text-5xl 
        max-md:text-xl max-md:w-3/4 max-md:text-center font-semibold max-md:mx-auto"
      >
        <p>
          Dont Just
          <span className="span"> Believe What We Say </span>
        </p>
      </div>
      <div className="max-md:hidden flex flex-row justify-evenly gap-10 px-10 my-10">
        {testimonials.map((testimonial, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={`900` * `${index + 1}`}
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className="card flex flex-col gap-6 w-full p-10 text-justify rounded-xl"
            >
              <div className="flex flex-row gap-6">
                <img src={testimonial.image} alt="image" className="w-1/9" />
                <div className="flex flex-col ">
                  <p className="text-lg">{testimonial.name}</p>
                  <p className="text-sm opacity-50">{testimonial.occupation}</p>
                </div>
              </div>
              <p>"{testimonial.word}"</p>
            </div>
          );
        })}
      </div>
      <div className="md:hidden">
        <Splide>
          {testimonials.map((testimonial) => {
            return (
              <SplideSlide>
                <div
                  data-aos="fade-up"
                  data-aos-delay="850"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="flex flex-col card w-full p-6 my-10 gap-6 text-justify rounded-md"
                >
                  <div className="flex flex-row gap-4">
                    <img
                      src={testimonial.image}
                      alt="image"
                      className="w-1/6"
                    />
                    <div className="flex flex-col">
                      <p className="text-lg">{testimonial.name}</p>
                      <p className="text-sm opacity-50">
                        {testimonial.occupation}
                      </p>
                    </div>
                  </div>
                  <p>"{testimonial.word}"</p>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
export default Testimonials;

