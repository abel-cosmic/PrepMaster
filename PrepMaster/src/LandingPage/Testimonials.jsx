import testimonials from "./../assets/testimonial.svg";

export function Testimonials() {
  return (
    <div>
      <div
        className="w-full flex felx-col md:justify-center md:mt-52 max-md:mt-16 md:text-5xl 
        max-md:text-xl max-md:w-3/4 max-md:text-center font-semibold max-md:mx-auto">
        <p>
          Dont Just
          <span className="span"> Believe What We Say </span>
        </p>
      </div>
      <div className="flex flex-row">
        <img src={testimonials} alt="testimonials" />
      </div>
    </div>
  );
}
