import { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  { q: "1. You got a surprise gift 🎁", ans: "Happy" },
  { q: "2. Your ice cream fell on the ground 🍦😭", ans: "Sad" },
  { q: "3. You are stuck in traffic for 1 hour 🚗🚦", ans: "Angry" },
  { q: "4. It’s just another Monday morning 🌞", ans: "Neutral" },
  { q: "5. You scored full marks on a test 🏆", ans: "Happy" },
  { q: "6. You lost your favorite toy 🧸", ans: "Sad" },
  { q: "7. Someone ate your fries without asking 🍟", ans: "Angry" },
  { q: "8. It’s raining outside and you are just watching 🌧️", ans: "Neutral" },
  { q: "9. Your best friend throws you a birthday party 🎉", ans: "Happy" },
  { q: "10. Your phone battery died during a game 🎮🔋", ans: "Sad" }
];

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);
  const [popup, setPopup] = useState(null);

  const checkAnswer = (choice) => {
    if (choice === questions[step].ans) {
      setScore(score + 1);

      const progress = Math.round(((step + 1) / questions.length) * 100);
      setPopup(`✅ Correct! Question`);

      setTimeout(() => {
        setPopup(null);
        setStep(step + 1);
      }, 1500);
    } else {
      setPopup("❌ Oops, try again!");

      setTimeout(() => {
        setPopup(null);
      }, 1500);
    }
  };

  if (step >= questions.length) {
    return (
      <div className="flex flex-col items-center py-10">
        <h2 className="text-3xl font-bold">Quiz Complete 🎉</h2>
        <p className="mt-4 text-lg">
          Your Score: {score}/{questions.length}
        </p>
        <Link to="/MoodExplorer">
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:scale-110 transition">
            Let's move too MoodExplorer🚀
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-10 px-6 relative">
      {popup && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          {popup}
        </div>
      )}

      <div className="w-full max-w-lg mb-6">
         <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                Question {step + 1} of {questions.length} — {Math.round(((step + 1) / questions.length) * 100)}%
      </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-sky-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Quiz Time ✨</h2>
      <p className="text-lg mb-6">{questions[step].q}</p>

      <div className="flex flex-wrap justify-center gap-6">
        <button
          onClick={() => checkAnswer("Happy")}
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-md hover:scale-110 transition flex items-center gap-2"
        >
          😊 Happy
        </button>
        <button
          onClick={() => checkAnswer("Sad")}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:scale-110 transition flex items-center gap-2"
        >
          😢 Sad
        </button>
        <button
          onClick={() => checkAnswer("Angry")}
          className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:scale-110 transition flex items-center gap-2"
        >
          😡 Angry
        </button>
        <button
          onClick={() => checkAnswer("Neutral")}
          className="px-6 py-3 bg-gray-500 text-white rounded-xl shadow-md hover:scale-110 transition flex items-center gap-2"
        >
          😐 Neutral
        </button>
      </div>

      
    </div>

    
  );
}
