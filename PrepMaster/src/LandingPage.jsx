import Navigation from "./Navigation";
import CustomButton from "./Components/CustomButton";
export default function LandingPage() {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center pt-28 gap-10">
        <div class="gradient-text ">Start Acing Your Exams Today</div>
        <div className="text-center description">
          Join 10,000+ students in securing your top spot in the exit exam in
          various fields from Computer Science to Accounting
        </div>
        <div>
          <CustomButton text={"Try for free"} padding={"0.8rem 3.4rem"}/>
        </div>
      </div>

    </div>
  );
}
