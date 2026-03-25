import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { AudioContext } from "../context/AudioContext";
import "./styles/VolumeIcon.css";

export default function VolumeIcon() {
  const { isPlaying, toggleMusic } = useContext(AudioContext);

  return (
    <div className="volume-icon-wrapper">
      <FontAwesomeIcon
        icon={isPlaying ? faVolumeUp : faVolumeMute}
        className="volume-icon"
        onClick={toggleMusic}
        aria-label={isPlaying? "Click to stop sound" : "press to start sound"}
      />
    </div>
  );
}