// src/components/MemoryGameCard.jsx
import "./MemoryGameCard.css";

export default function MemoryGameCard({ card, handleChoice, flipped}) {
    const handleClick = () => {
        handleChoice(card)
    }
    return (
        <div className="mg-card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front-card" alt="front card" src={card.src} />
                <img className="back-card" 
                 onClick={handleClick}
                 alt="back card" src="/images/cover.png" />
            </div>
        </div>
    );
}