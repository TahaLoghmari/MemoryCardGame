/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import "../Styles/Cards.css";

export default function Cards({ score, setScore, bestScore, setBestScore }) {
  let [cards, setCards] = useState([]);
  useEffect(() => {
    const apiCards = async () => {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/search?api_key=YkJXsgpt9P9UeOslE5vxMC5p01ocOpUR&q=anime&limit=18&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
      );
      const data = await response.json();
      setCards(data);
    };
    apiCards();
    return () => {
      setCards([]);
    };
  }, []);
  if (!cards.data) return <div>Loading...</div>;
  return (
    <div className="cards">
      {cards.data.map((card) => (
        <Card
          key={card.id}
          url={card.images.original.url}
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
          title={card.title}
          setCards={setCards}
        />
      ))}
    </div>
  );
}
