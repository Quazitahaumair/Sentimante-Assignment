import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const cardImages = [
  { src: "🍎", matched: false },
  { src: "🍌", matched: false },
  { src: "🍇", matched: false },
  { src: "🍊", matched: false },
  { src: "🍉", matched: false },
  { src: "🍓", matched: false }
];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  // Start Game
  const startGame = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffled);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    setGameOver(false);
    setStarted(true);
  };

  // Handle Choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare choices
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          );
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 800);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset Turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  // Check game over
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameOver(true);
    }
  }, [cards]);

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-r from-purple-400 to-pink-500 text-white">
      <h1 className="text-3xl font-bold mb-4">🎴 Memory Match Game</h1>

      {!started ? (
        <button
          onClick={startGame}
          className="bg-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Start Game
        </button>
      ) : gameOver ? (
        // 🎉 Show ONLY the win screen when game is over
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold">🎉 Congratulations! You won!</h2>
          <p className="mt-2">Turns Taken: {turns}</p>
          <Link to="/wrapUp">
            <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:scale-105 transition font-semibold">
              It's time to WrapUp?
            </button>
          </Link>
          {/* Play Again Button */}
      <button
        onClick={startGame}
        className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-lg hover:scale-105 transition font-semibold"
      >
        Play Again
      </button>
        </div>
      ) : (
        
        
        // Game board only shows if not over
        <>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => !disabled && handleChoice(card)}
                className="w-20 h-20 flex items-center justify-center text-2xl bg-white text-black rounded-lg shadow-lg hover:scale-105 transition"
                disabled={card.matched}
              >
                {card === choiceOne || card === choiceTwo || card.matched ? (
                  <span>{card.src}</span>
                ) : (
                  <span className="text-gray-400">❓</span>
                )}
              </button>
            ))}
          </div>

          <p className="mb-4">Turns: {turns}</p>

          <button
            onClick={startGame}
            className="bg-yellow-500 px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
}
