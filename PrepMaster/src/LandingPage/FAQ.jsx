import { useState } from 'react';
import minus from './../assets/minus.png';
import plus from './../assets/plus.png';

export function FAQ() {
    const [showAnswer, setShowAnswer] = useState(false);

    const faqs = [
        {
            id: 1,
            question: "What types of tests are available on this practice exam website?",
            answer: "Our practice exam website specializes in multiple-choice tests, offering a wide range of carefully crafted questions with answer choices. You can test your knowledge and critical thinking skills by selecting the most appropriate option from the given alternatives."
        },
        {
            id: 2,
            question: "Can I access the practice exams for free without a subscription?",
            answer: "Absolutely! Our practice exams are accessible to all users at no cost or subscription requirement. You can take advantage of this opportunity to attempt one exam per course, receive detailed feedback on 10 answers, and explore selected model exams to enhance your learning experience."
        },
        {
            id: 3,
            question: "What are the benefits of the student premium package?",
            answer: "By subscribing to the student premium package for 24.99 ETB/month, you gain unlimited access to all exams, receive unlimited feedback on your answers, access all model exams, and benefit from an AI-based performance meter to track your progress."
        },
        {
            id: 4,
            question: "How do I upgrade my subscription from free to premium?",
            answer: "To upgrade from the free access, simply select the student premium package and complete the subscription payment process to unlock the full range of benefits and features."
        },
        {
            id: 5,
            question: "Are there any performance analytics or reports available?",
            answer: "Yes, our practice exam website offers comprehensive performance analytics and reports, empowering you to monitor your progress, identify areas for improvement, and evaluate your performance through detailed insights and statistics."
        }

    ] 
        const toggleAnswer = () => {
          setShowAnswer(!showAnswer);
        };
      
        return (
          <div className="flex flex-col justify-evenly items-center my-32">
            <div className="text-5xl mb-10">
              Got Any <span className="span">Questions</span>? We've Got The{" "}
              <span className="span">Answers</span>
            </div>
            <div className=" flex flex-col justify-evenly gap-6" style={{width:"80rem"}}>
              {faqs.map((faq) => (
                <div
                  className={`flex flex-col border-b border-gray-400 pb-4 ${
                    showAnswer ? "pb-0" : "pb-4"
                  }`}
                  key={faq.id}
                >
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex-1 text-3xl">{faq.question}</div>
                    <img
                      src={showAnswer ? minus : plus}
                      alt="Toggle Icon"
                      className="cursor-pointer"
                      onClick={toggleAnswer}
                    />
                  </div>
                  {showAnswer && (
                    <div className="border-b border-gray-400 py-6 text-xl">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      }
      

