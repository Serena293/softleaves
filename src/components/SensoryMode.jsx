import "./SensoryMode.css";
import SettingsPanel from "./SettingsPanel";
import leaf1 from "../../public/images/sensory/leaf1.png";
import leaf2 from "../../public/images/sensory/leaf2.png";
import leaf3 from "../../public/images/sensory/leaf3.png";
import leaf4 from "../../public/images/sensory/leaf4.png";

import { useState} from "react";



import SettingPanle from "./SettingsPanel";


export default function SensoryMode() {
  const leaves = [leaf1, leaf2, leaf3, leaf4];
  const [isPaused, setIsPaused] = useState(false);






  const [leavesData] = useState(() =>
    Array.from({ length: 10 }).map(() => ({
      src: leaves[Math.floor(Math.random() * leaves.length)],
      left: Math.random() * 100,
      duration: 8 + Math.random() * 5,
      delay: Math.random() * 5,
      size: 30 + Math.random() * 20,
    })),
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

    <SettingsPanel 
     isPaused={isPaused} 
        setIsPaused={setIsPaused}
        showMotionControl={true}
        />
      
    </section>
  );

  
}
