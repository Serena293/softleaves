import { useRef, useState, useEffect } from "react";
import { AudioContext } from "./AudioContext";
import sound from "../../public/music/sunset-haze.mp3";

export function AudioProvider({ children }) {
  const audioRef = useRef(new Audio(sound));
  const [isPlaying, setIsPlaying] = useState(false);
  const [stopOnNavigation, setStopOnNavigation] = useState(true);

  
  const stopOnNavigationRef = useRef(stopOnNavigation);

  useEffect(() => {
    stopOnNavigationRef.current = stopOnNavigation;
  }, [stopOnNavigation]);

  function toggleMusic() {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.loop = true;
      audio.play();
    } else {
      audio.pause();
    }
  }

  function setMode(shouldStop) {
    setStopOnNavigation(shouldStop);
  }

  useEffect(() => {
    const audio = audioRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        audioRef,
        isPlaying,
        toggleMusic,
        stopOnNavigation,
        setMode,
        stopOnNavigationRef,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
