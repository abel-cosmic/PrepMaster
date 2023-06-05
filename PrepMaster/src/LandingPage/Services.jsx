import paper from "./../assets/papers-lines 1.svg";
import brain from "./../assets/brain 1.svg";
import key from "./../assets/key-monitor 1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const services = [
  {
    id: 1,
    image: paper,
    title: "100+ Prepared Exams",
    description:
      "We have curated a set of questions that can be used for self-assessment or to assess your students. Feel free to utilize them as a tool to evaluate your progress.",
  },
  {
    id: 2,
    image: brain,
    title: "Personalized Questions",
    description:
      "We use machine learning to create personalized questions that improve your weak points and strengthen your core. AI feedback on your answers helps enhance your understanding.",
  },
  {
    id: 3,
    image: key,
    title: "High Security",
    description:
      "We prioritize the utmost security for your questions, ensuring that no unauthorized personnel can gain access and misuse your data.",
  },
];
export default function Services() {
  return (
    <div>
      <div
        className="flex md:flex-row max-md:flex-col justify-center md:my-64 md:mx-32 max-md:my-16 max-md:gap-6 max-md:mx-6"
        id="services"
      >
        {services.map((service, index) => {
          return (
            <div
              key={service.id}
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              data-aos-delay={`200` * `${index + 2}`}
              className="flex items-start mx-2"
            >
              <img
                src={service.image}
                alt="icon"
                className="max-md:w-1/12 mr-4"
              />
              <div className="text-left md:space-y-10 max-md:space-y-4">
                <h1 className="md:text-2xl max-md:text-xl self-center font-semibold">
                  {service.title}
                </h1>
                <p className="md:text-xl max-md:text-sm text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
