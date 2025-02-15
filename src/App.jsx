import { useState } from "react";
import Cards from "./Components/Cards";
import "./Styles/App.css";

function App() {
  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  return (
    <>
      <header>
        <h1>Memory Card Game</h1>
        <div className="scores">
          <div className="score">
            <p>Score : {score}</p>
          </div>
          <div className="bestScore">
            <p>Best Score : {bestScore}</p>
          </div>
        </div>
      </header>
      <Cards
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
