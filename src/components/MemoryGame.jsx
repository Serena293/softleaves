// src/components/MemoryGame.jsx
import { useEffect, useState } from "react";
import "./styles/MemoryGame.css";
import MemoryGameCard from "./MemoryGameCard";
import SettingsPanel from "./SettingsPanel";
import VolumeIcon from "./VolumeIcon"
const cardImages = [
  { src: "/images/clouds.png", marched: false },
  { src: "/images/lightining.png", marched: false },
  { src: "/images/moon.png", marched: false },
  { src: "/images/star.png", marched: false },
  { src: "/images/sun.png", marched: false },
  { src: "/images/tree.png", marched: false },

];
 const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const getInitialCards = () => {
  const duplicatedCards = [...cardImages, ...cardImages].map((card) => ({
    ...card,
    id: Math.random(),
  }));
  return shuffleArray(duplicatedCards);
};
export default function MemoryGame() {
  const [cards, setCards] = useState(getInitialCards());
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

 

  const shuffleCards = () => {
    const duplicatedCards = [...cardImages, ...cardImages].map((card) => ({
      ...card,
      id: Math.random(),
    }
));
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffleArray(duplicatedCards));
    setTurns(0);
  };

  const handleChoice = (card) => {
    //console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };
  
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) { 
              return { ...card, matched: true };
           
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);


  return (
    <>
    <div className="div-settings-panel">
    <SettingsPanel />
    </div>
    <div className="volume-div">
      <VolumeIcon/>

    </div>
    <section className="main-section">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}
       aria-label="Start a new memory game">New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <MemoryGameCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
      <div>
        <p aria-live="polite">Turn played: {turns}</p>
      </div>
    </section>
    
    </>
  );
}
