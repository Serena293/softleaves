import "./SensoryMode.css";

import leaf1 from "../../public/images/sensory/leaf1.png";
import leaf2 from "../../public/images/sensory/leaf2.png";
import leaf3 from "../../public/images/sensory/leaf3.png";
import leaf4 from "../../public/images/sensory/leaf4.png";

import { useState, useEffect } from "react";
import { useAudio } from "../context/useAudio";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function SensoryMode() {
  const leaves = [leaf1, leaf2, leaf3, leaf4];

  const [isPaused, setIsPaused] = useState(false);
  const [panelOpen, setPanelOpen] = useState(true);

  const {
    audioRef,
    isPlaying,
    toggleMusic,
    stopOnNavigation,
    setMode,
    stopOnNavigationRef,
  } = useAudio();

  useEffect(() => {
    const audio = audioRef.current;

    // Cleanup when component unmounts
    return () => {
      if (stopOnNavigationRef.current) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const togglePanel = () => setPanelOpen((prev) => !prev);

  const [leavesData] = useState(() =>
    Array.from({ length: 10 }).map(() => ({
      src: leaves[Math.floor(Math.random() * leaves.length)],
      left: Math.random() * 100,
      duration: 8 + Math.random() * 5,
      delay: Math.random() * 5,
      size: 30 + Math.random() * 20,
    }))
  );

  return (
    <section
      className={`sensory-mode-main-section ${isPaused ? "paused" : ""}`}
    >
      {leavesData.map((leaf, index) => (
        <img
          key={index}
          src={leaf.src}
          className="leaf"
          alt=""
          style={{
            left: `${leaf.left}%`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            width: `${leaf.size}px`,
          }}
        />
      ))}

      {/* Panel wrapper fixed at top-left */}
      <div className="sensory-panel-wrapper">
        {/* Panel content */}
        <div className={`sensory-controls ${panelOpen ? "open" : "closed"}`}>
          <button
            className="controls-btn"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? "Resume motion" : "Pause motion"}
          </button>

          <button className="controls-btn" onClick={toggleMusic}>
            {isPlaying ? "Stop sound" : "Play sound"}
          </button>
<label className="controls-label">
  <div className="toggle-wrapper">
    <input
      type="checkbox"
      checked={stopOnNavigation}
      onChange={(e) => setMode(e.target.checked)}
      className="toggle-input"
    />
  </div>
  Stop music when leaving this page
</label>

        </div>

        <button className="toggle-panel-btn" onClick={togglePanel}>
         
          <FontAwesomeIcon icon={panelOpen ? faAngleDown : faAngleUp} /> 
          {/* {!panelOpen && <p>settings</p>} */}
        </button>
      </div>
    </section>
  );
}