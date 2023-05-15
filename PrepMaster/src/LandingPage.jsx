import Navigation from "./Navigation";
import Home from "./Home";
import image from "./assets/half-image.png";
import Services from "./Services";
import { Testimonials } from "./Testimonials";

export default function LandingPage() {
  return (
    <div>
      <div></div>
      <Navigation />
      <Home />
      <div className="w-full flex felx-col justify-center mt-52 text-5xl font-bold">
        <p>
           What Makes Us
          <span className="span"> Different </span>
        </p>
      </div>
      <Services/>
      <Testimonials/>
    </div>
  );
}
