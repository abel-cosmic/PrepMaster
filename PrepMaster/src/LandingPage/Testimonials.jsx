import { Splide, SplideSlide } from "@splidejs/react-splide";
import hana from "../assets/hana.svg";
import David from "../assets/David.svg";
import Samuel from "../assets/samuel 1.svg";
import poster from "../assets/poster.webp";
import rick from "../assets/rick.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export function Testimonials() {
  const testimonials = [
    {
      name:"Hannah Nguyen",
      occupation: "Software Engineer Student in AAU",
      image: hana,
      word:"As a business administration student preparing for my exit exam, Prepmaster has been an incredible asset to my study routine. The platform offers a wide range of multiple-choice questions covering various business topics, allowing me to reinforce my understanding of key concepts. The immediate answer feedback provided not only helped me gauge my performance but also provided detailed explanations for incorrect answers, enhancing my learning experience. Prepmaster's user-friendly interface and comprehensive question bank make it the ideal choice for anyone aiming to excel in their business exams!",
    },
    {
      name: "Samuel Alemu",
      occupation: "Medical Student in Harvard",
      image: Samuel,
      word: "Prepmaster has been an invaluable resource for my preparation for the medical licensing exam. The vast collection of multiple-choice questions provided by Prepmaster allowed me to practice extensively and become familiar with the exam format. The detailed answer feedback provided after each question helped me identify my strengths and weaknesses, enabling me to focus my studies efficiently. Thanks to Prepmaster, I felt confident and well-prepared on the day of my exam. I highly recommend this website to all aspiring medical professionals!"
    },    
    {
      name: "David Kimani",
      occupation: "Civil Engineering Student in South Korea",
      image: David,
      word: "Prepmaster has revolutionized my preparation for the civil engineering exit exam. The platform's extensive question database covers all major topics, allowing me to practice a diverse range of multiple-choice questions. The detailed answer feedback provided after each attempt has been instrumental in strengthening my problem-solving skills and understanding of complex engineering concepts. Prepmaster's intuitive interface and interactive question formats have made my exam preparation both engaging and effective. I can confidently say that Prepmaster played a significant role in my success on the exam day!"
    },
  ];

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-delay="650"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        className="w-full flex felx-col md:justify-center md:mt-52 max-md:mt-16 md:text-5xl 
        max-md:text-xl max-md:w-3/4 max-md:text-center font-semibold max-md:mx-auto "
      >
        <p>
          Dont Just
          <span className="span"> Believe What We Say </span>
        </p>
      </div>
      <div className="max-md:hidden flex flex-row justify-evenly gap-10 px-10 my-10 ">
        {testimonials.map((testimonial, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={`900` * `${index + 1}`}
              data-aos-duration="800"
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
                  data-aos-duration="800"
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
      <video poster={poster} controls className="md:p-10 md:w-3/4 m-auto my-20">
        <source src={rick} type="video/mp4" />
      </video>
    </div>
  );
}
export default Testimonials;
