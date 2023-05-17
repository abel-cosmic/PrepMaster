import paper from "./../assets/papers-lines 1.svg";
import brain from "./../assets/brain 1.svg";
import key from "./../assets/key-monitor 1.svg";

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
      <div className="flex flex-row justify-center my-72 mx-32" id="services">
        {services.map((service, index) => {
          return (
            <div key={service.id} className="flex items-start mx-2">
              <img
                src={service.image}
                alt="icon"
                className="w-3.125rem h-3.125rem mr-4"
              />
              <div className="text-left text-xl space-y-10">
                <h1 className="text-2xl font-bold">{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
