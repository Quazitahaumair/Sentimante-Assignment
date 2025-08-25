import { Link } from "react-router-dom";

export default function Story() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 max-w-3xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Story Time 📚✨</h2>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          One sunny morning, <span className="font-bold text-blue-600">Alex</span> met a friendly robot named <span className="font-bold text-pink-600">Robo 🤖</span> in the park.  
          Robo waved and said: “Hi Alex! Did you know <span className="font-semibold">every word has a feeling</span>?”
        </p>

        <p>
          Alex was curious: “Really? Even words like ‘banana’ 🍌 or ‘rainbow’ 🌈?”  
          Robo laughed: “Yes! Some words make you <span className="text-green-600 font-bold">Happy 😊</span>, some <span className="text-red-600 font-bold">Sad 😢</span>, and some are just <span className="text-blue-600 font-bold">Neutral 😐</span>.”
        </p>

        <p>
          Robo continued:  
          <span className="block mt-2">“I have <span className="font-semibold text-pink-600">two superpowers</span> to read feelings in words!”</span>
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-green-600">Word Book 📖:</span>  
            “I check my little dictionary. If the sentence has happy words, I say Happy. If it has sad words, I say Sad!”
          </li>
          <li>
            <span className="font-bold text-purple-600">AI Brain 🧠:</span>  
            “I can also use my smart brain trained with many examples to guess the mood of the sentence!”
          </li>
        </ul>

        <p className="font-semibold text-gray-800">
          Alex’s eyes sparkled ✨: “Wow Robo, can I try both?”  
          Robo nodded: “Absolutely! Let’s go to the playground 🎮 and test both my powers. But first… can you guess which words are happy and which are sad?”
        </p>

        <p className="italic text-gray-600 text-center">
          (Hint: Look at the emojis 😄😭😐 to guess the mood!)
        </p>

        <div className="text-center mt-6">
          <Link to="/playground">
            <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:scale-105 transition font-semibold">
              Let’s Play Something Fun! 🎉
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
