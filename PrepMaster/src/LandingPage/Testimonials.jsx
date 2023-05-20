import filledCircle from "./../assets/Ellipse 17.svg";
import unfilledCircle from "./../assets/Ellipse 18.svg";
import testimonials from "./../assets/testimonial.svg";
import left from "./../assets/left-arrow.svg";
import right from "./../assets/right-arrow.svg";

export function Testimonials() {
  return (
    <div>
      <div
        className="w-full flex felx-col md:justify-center md:mt-52 max-md:mt-16 md:text-5xl 
                      max-md:text-xl max-md:w-3/4 max-md:text-center font-semibold max-md:mx-auto"
      >
        <p>
          Dont Just
          <span className="span"> Believe What We Say </span>
        </p>
      </div>
      <div className="flex flex-row">
        <img src={testimonials} alt="testimonials" />
        {/* <img src={left} alt="testimonials" />
        <img src={testimonials} alt="testimonials" />
                <img src={right} alt="testimonials" />
                <img src={testimonials} alt="testimonials" /> */}
      </div>
    </div>
  );
}
