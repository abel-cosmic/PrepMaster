import Navigation from "./Navigation";
import Home from "./Home";
import Services from "./Services";
import { Testimonials } from "./Testimonials";
import { Contacts } from "./Contacts";
import { Payments } from "./Payments";
import { ExploreOurOptions } from "./ExploreOurOptions";
import { Packages } from "./Packages";
import { Footer } from "./Footer";
import { FAQ } from "./FAQ";

export default function LandingPage() {
  return (
    <div>
      <div></div>
      <Navigation />
      <Home />
      <div className="w-full flex felx-col justify-center mt-52 text-5xl font-bold ">
        <p>
           What Makes Us
          <span className="span"> Different </span>
        </p>
      </div>
      <Services />
      <Payments/>
      <Testimonials/>
      <ExploreOurOptions/>
      <Packages/>
      <FAQ/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
