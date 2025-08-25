import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
      <h1 className="text-4xl font-bold text-blue-700">Meet Robo 🤖</h1>
      <p className="mt-4 text-lg text-gray-700">
        Robo will teach you how to read the feelings inside words!
      </p>
      <Link to="/story">
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-2xl shadow-lg hover:scale-105 transition">
          Start Learning 🎉
        </button>
      </Link>
    </div>
  );
}
