import { Link } from "react-router-dom";

export default function Story() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 max-w-3xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg mt-24 sm:mt-32">
      <h2 className="story text-4xl sm:text-5xl font-extrabold mb-8 text-center text-purple-700">
        Story Time 📚✨
      </h2>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          One sunny morning,{" "}
          <span className="font-bold text-blue-600">Taha</span> met a curious
          robot named <span className="font-bold text-pink-600">Robo 🤖</span> in
          the park. Robo was busy typing very fast on a glowing screen.
        </p>

        <p>
          “Wow Robo, what are you doing?” Taha asked.  
          Robo smiled:{" "}
          <span className="italic">
            “I’m training my typing speed in the Playground! The faster I type,
            the sharper my circuits get.”
          </span>
        </p>

        <p>
          Taha’s eyes lit up. “That sounds fun! Can I try too?”  
          Robo nodded: “Of course! First, let’s play in the{" "}
          <span className="font-bold text-green-600">Playground ⌨️</span> and test
          your skills. Then, we’ll move on to the{" "}
          <span className="font-bold text-blue-600">Quiz 🎴</span> to challenge
          your memory.”
        </p>

        <p>
          After some laughs and games, Robo whispered:  
          <span className="italic">
            “But the real magic comes after the quiz… we’ll explore the{" "}
            <span className="font-bold text-purple-600">Mood Explorer 🌈</span>.
            There, words aren’t just letters — they carry{" "}
            <span className="text-green-600 font-bold">Happy 😊</span>,{" "}
            <span className="text-red-600 font-bold">Sad 😢</span>, or{" "}
            <span className="text-blue-600 font-bold">Neutral 😐</span> feelings.”
          </span>
        </p>

        <p>
          Robo explained: “I have{" "}
          <span className="font-semibold text-pink-600">two superpowers</span> to
          read feelings in words!”
        </p>

        <ul className="robo">
          
            <span className="font-bold text-green-600">Word Book 📖:</span> I check
            my dictionary of happy and sad words to guess the mood.<br></br>
            <span className="font-bold text-purple-600">AI Brain 🧠:</span> My
            smart brain, trained with many examples, helps me sense the feeling in
            whole sentences!
        </ul>

        <p className="font-semibold text-gray-800">
          Taha’s eyes sparkled ✨: “So Playground, Quiz, and Mood Explorer are all
          part of one big adventure?”  
          Robo winked: “Exactly! 🚀 Let’s begin!”
        </p>

        <p className="italic text-gray-600 text-center">
          (Hint: Follow the buttons below to join Taha & Robo’s journey!)
        </p>

        {/* Buttons for interactive journey */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
          <Link to="/playground">
            <button className="w-full px-4 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:scale-105 transition font-semibold">
              🎮 Playground
            </button>
          </Link>

          <Link to="/quiz">
            <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-2xl shadow-lg hover:scale-105 transition font-semibold">
              📝 Quiz
            </button>
          </Link>

          <Link to="/MoodExplorer">
            <button className="w-full px-4 py-3 bg-purple-500 text-white rounded-2xl shadow-lg hover:scale-105 transition font-semibold">
              🌈 Mood Explorer
            </button>
          </Link>
        </div>

        <p className="text-center text-gray-700 mt-6 font-medium">
          Where will you go first with Taha & Robo? Choose your adventure below! ✨
        </p>
      </div>
    </div>
  );
}
