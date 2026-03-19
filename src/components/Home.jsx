// src/components/Home.jsx
import React from "react";
import "./Home.css";
import Tree from "./Tree";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h2>Welcome to SoftLeaves</h2>
        <p>Your accessible interactive experiences start here.</p>
      </section>

      <section className="cards-container">
        <div className="card" id="memory">
          <h3>Memory Game</h3>
          <p>
            Exercise your attention and focus with a calm, predictable memory
            matching game.
          </p>
        </div>

        <div className="card" id="sequences">
          <h3>Sequences</h3>
          <p>Repeat gentle sequences in a structured, relaxing environment.</p>
        </div>

        <div className="card" id="sensory">
          <h3>Sensory Mode</h3>
          <p>
            Enjoy a soothing autumn tree animation with falling leaves. Adjust
            speed, sound, and visuals for a stress-free experience.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div>
          <h3> Why I made this</h3>
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
    </main>
  );
}
