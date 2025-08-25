import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Story from "./components/story";
import Playground from "./components/playground";
import Quiz from "./components/quiz";
import WrapUp from "./components/wrapUp";
import Navbar from "./components/navbar";
import Answers from "./components/answers";
import MoodExplorer from "./components/MoodExplorer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />  
          <Route path="/story" element={<Story />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/answers" element={<Answers />} />
          <Route path="/wrapup" element={<WrapUp />} />
          <Route path="/MoodExplorer" element={<MoodExplorer />} />
          <Route path="*" element={<h1 >404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
