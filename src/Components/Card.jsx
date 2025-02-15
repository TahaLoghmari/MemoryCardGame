/* eslint-disable react/prop-types */
import "../Styles/Card.css";
import { useState, useEffect } from "react";
export default function Card({
  url,
  score,
  setScore,
  bestScore,
  setBestScore,
  title,
  setCards,
}) {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (!score) setIsClicked(false);
  }, [score]);
  const shuffleCards = () => {
    setCards((prevCards) => {
      if (!prevCards.data) return prevCards;
      const shuffled = { ...prevCards, data: [...prevCards.data] };
      for (let i = shuffled.data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled.data[i], shuffled.data[j]] = [
          shuffled.data[j],
          shuffled.data[i],
        ];
      }
      return shuffled;
    });
  };
  const handleScore = () => {
    if (!isClicked) {
      setIsClicked(true);
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    } else {
      setScore(0);
    }
    shuffleCards();
  };
  return (
    <div className="card">
      <img src={url} alt={title} onClick={handleScore} />
    </div>
  );
}
