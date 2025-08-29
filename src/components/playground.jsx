import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const words = [
  "React", "JavaScript", "Fun", "Code", "Playground",
  "Speed", "Challenge", "Typing", "Learn", "Game", "Taha", "Python", 
  "Vizuara", "Assignment",
];

export default function Playground() {
  const [currentWord, setCurrentWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); 
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const navigate = useNavigate();

  const pickWord = () => {
    const random = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(random);
    setUserInput("");
    setFeedback("");
  };

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameStarted, gameOver]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setGameStarted(true);
    pickWord();
  };

  const handleSubmit = () => {
    if (userInput.trim() === currentWord) {
      setScore(score + 1);
      setFeedback("✅ Correct!");
      pickWord();
    } else {
      setFeedback("❌ Try again!");
      setUserInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // Before game start screen
  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-6">
        <h2 className="text-3xl font-bold mb-4">Typing Speed Challenge ⌨️</h2>
        <p className="text-center mb-6 max-w-md">
          Type the word shown as fast as you can! <br />
          <span className="font-semibold">Note: You have only 30 seconds ⏱️</span>
        </p>
        <button
          onClick={startGame}
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:scale-105 transition"
        >
          Start Game
        </button>
      </div>
    );
  }

  // Game over screen
  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-6">
        <h2 className="text-3xl font-bold mb-4">🎉 Time's Up!</h2>
        <p className="text-xl mb-6">Your Score: {score}</p>
        <div className="flex gap-4">
          <button
            onClick={startGame}
            className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:scale-105 transition"
          >
            🔄 Restart Game
          </button>
          <button
            onClick={() => navigate("/quiz")}
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:scale-105 transition"
          >
            📝 Go to Quiz
          </button>
        </div>
      </div>
    );
  }

  // Game running screen
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-6 pt-24">
      <h2 className="text-2xl font-bold mb-2">Typing Speed Challenge ⌨️</h2>
      <p className="text-md text-gray-700 mb-6 text-center max-w-md">
        Type the word shown below as fast as you can! <br />
        Press <span className="font-semibold">Enter</span> or click Submit.
      </p>

      <p className="text-5xl font-bold mb-6 text-purple-700">{currentWord}</p>

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type the word here..."
        className="px-4 py-2 rounded-xl shadow-md w-72 text-center mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:scale-105 transition mb-4"
      >
        Submit
      </button>

      {feedback && (
        <div
          className={`mb-4 text-lg font-semibold ${
            feedback.includes("Correct") ? "text-green-600" : "text-red-500"
          }`}
        >
          {feedback}
        </div>
      )}

      <div className="flex justify-between w-72 text-lg font-semibold">
        <span>Score: {score}</span>
        <span>Time: {timeLeft}s</span>
      </div>
    </div>
  );
}
