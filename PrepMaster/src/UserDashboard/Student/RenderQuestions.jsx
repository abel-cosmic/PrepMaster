import { Button } from "@mui/material";
import CustomButton from "../../Components/CustomButton.jsx";

export default function RenderQuestions(){
    const questions = [
        {
          question: "What is the capital of France?",
          choice: ["London", "Addis Ababa", "Paris", "Venice"],
          answer: "Paris",
        },
        {
          question: "What is the capital of Ethiopia?",
          choice: ["London", "Addis Ababa", "Paris", "Venice"],
          answer: "Addis Ababa",
        },
        {
          question: "What is the capital of Britin?",
          choice: ["London", "Addis Ababa", "Paris", "Venice"],
          answer: "London",
        },
        {
          question: "What is the capital of Italy?",
          choice: ["London", "Addis Ababa", "Paris", "Rome"],
          answer: "Rome",
        },
      ];

      return(
        <div className="flex flex-col gap-6">
            <p className="text-xl font-medium">{questions[1].question}</p>
            <form className="flex flex-col gap-4">
                {questions[1].choice.map((choice) => (
                    <div key={choice}>
                        <input type="radio" name="choice" value={choice} />
                        <label>{choice}</label>
                    </div>
                ))}
                <Button variant="text">Skip</Button>
                <input type="submit" value="Next" />
            </form>
        </div>
      )
}