export default function Answers() {
  const answers = [
  { question: "1: I love ice cream 🍦", answer: "Happy" },
  { question: "2: I hate homework 😡", answer: "Angry" },
  { question: "3: It is raining today 🌧️", answer: "Neutral" },
  { question: "4: You got a surprise gift 🎁", answer: "Happy" },
  { question: "5: Your ice cream fell on the ground 🍦😭", answer: "Sad" },
  { question: "6: You are stuck in traffic for 1 hour 🚗🚦", answer: "Angry" },
  { question: "7: It’s just another Monday morning 🌞", answer: "Neutral" },
  { question: "8: You scored full marks on a test 🏆", answer: "Happy" },
  { question: "9: You lost your favorite toy 🧸", answer: "Sad" },
  { question: "10: Someone ate your fries without asking 🍟", answer: "Angry" },
  { question: "11: It’s raining outside and you are just watching 🌧️", answer: "Neutral" },
  { question: "12: Your best friend throws you a birthday party 🎉", answer: "Happy" },
  { question: "13: Your phone battery died during a game 🎮🔋", answer: "Sad" },
];



  return (
    <div style={{marginTop: "100px"  }}>
      <h1 className="text-2xl font-bold mb-4">Quiz Answers</h1>
      <ul className="space-y-4">
        {answers.map((item, index) => (
          <li key={index} className="p-4 bg-white shadow rounded-lg">
            <p className="font-semibold">Question: {item.question}</p>
            <p className="text-gray-700">Answer: {item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
