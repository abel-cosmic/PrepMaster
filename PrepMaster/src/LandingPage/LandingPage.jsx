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
import { WhatMakes } from "./WhatMakes";

export default function LandingPage() {
  return (
    <div>
      <Navigation />
      <Home />
      <WhatMakes />
      <Services />
      <Payments />
      <Testimonials />
      <ExploreOurOptions />
      <Packages />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}
