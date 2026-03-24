import "./SettingsPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useAudio } from "../context/useAudio";
import { useEffect, useState } from "react";

export default function SettingsPanel({ 
  isPaused, 
  setIsPaused, 
  showMotionControl = false  
}) {
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

    return () => {
      if (stopOnNavigationRef.current) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const togglePanel = () => setPanelOpen((prev) => !prev);

  return (
    <div className="sensory-panel-wrapper">
      <div className={`sensory-controls ${panelOpen ? "open" : "closed"}`}>
        {showMotionControl && setIsPaused && (
          <button className="controls-btn" onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? "Resume motion" : "Pause motion"}
          </button>
        )}

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
      </button>
    </div>
  );
}