import "./styles/Home.css";
import Tree from "./Tree";
import { useState } from "react";
import { Link } from "react-router-dom";
import SensoryMode from "./SensoryMode";
import Puzzle from "./Puzzle";
import VolumeIcon from "./VolumeIcon";

export default function Home() {
  const [flipMemory, setFlipMemory] = useState(false);
  const [flipPuzzle, setFlipPuzzle] = useState(false);
  const [flipSensory, setFlipSensory] = useState(false);

  return (
    <div className="home">
      <VolumeIcon />
      <section className="hero">
        <h2>Welcome to SoftLeaves</h2>
        <p>Your accessible interactive experiences start here.</p>
      </section>

      <section className="cards-container">
        <div
          className={`card ${flipMemory ? "rotated" : ""}`}
          onClick={() => setFlipMemory(!flipMemory)}
          role="button"
          aria-label={
            flipMemory
              ? "Memory game card flipped, click to see front"
              : "Memory game card, click to play"
          }
        >
          <div className="card-content" role="button">
            {!flipMemory ? (
              <>
                <h3>Memory Game</h3>
                <p>
                  Exercise your attention and focus with a calm, predictable
                  memory matching game.
                </p>
              </>
            ) : (
              <div className="backcard">
                <button className="card-button">
                  <Link to="/memorygame">Play Now</Link>
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className={`card ${flipPuzzle ? "rotated" : ""}`}
          onClick={() => setFlipPuzzle(!flipPuzzle)}
          role="button"
          aria-label={
            flipPuzzle
              ? "Puzzle card flipped, click to se front of the card"
              : "Puzzle Card, click to play"
          }
        >
          <div className="card-content">
            {!flipPuzzle ? (
              <>
                <h3>Puzzle</h3>
                <p>Build the image using the available pieces.</p>
              </>
            ) : (
              <div className="backcard">
                <button className="card-button">
                  <Link to="/puzzle" element={<Puzzle />}>
                    Play Now
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className={`card ${flipSensory ? "rotated" : ""}`}
          onClick={() => setFlipSensory(!flipSensory)}
          role="button"
          aria-label={
            flipSensory
              ? "Sensory mode card flipped, click to see front of the card"
              : "Sensory mode, click to enter"
          }
        >
          <div className="card-content">
            {!flipSensory ? (
              <div>
                <h3>Sensory Mode</h3>
                <p>
                  Enjoy a soothing autumn tree animation with falling leaves and
                  relaxing sound.
                </p>
              </div>
            ) : (
              <div className="backcard">
                <button className="card-button">
                  <Link to="/sensorymode" element={<SensoryMode />}>
                    Enter Now
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div>
          <h3>Why I made this</h3>
          <p>
            SoftLeaves is designed with accessibility in mind. I prioritize
            predictable interactions, soft colors, and user controls to create a
            calming, inclusive experience for everyone.
          </p>
        </div>
        <div className="forest">
          <Tree foliageColor="#FF8B5A" />
          <Tree foliageColor="#FFA500" />
          <Tree foliageColor="#9ACD32" />
        </div>
      </section>
    </div>
  );
}
