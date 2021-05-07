import React, { useEffect, useState } from "react";

const Controls = ({ player, list }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const playMusic = () => {
    if (isPlaying) {
      player.current.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      player.current.play();
    }
  };

  useEffect(() => {
    if (currentSong > list.length - 1) {
      setCurrentSong(0);
    }

    if (currentSong < 0) {
      setCurrentSong(list.length - 1);
    }

    player.current.src = list[currentSong];
    if (isPlaying) {
      player.current.play();
    }
  }, [currentSong]);

  return (
    <div className="player-controls">
      <i className="fas fa-backward" onClick={() => setCurrentSong(prev => prev - 1)} id="prev" title="Previous"></i>
      <i className={`fas fa-${isPlaying ? "pause" : "play"}-circle main-button`} onClick={playMusic} id="play" title="Play"></i>
      <i className="fas fa-forward" id="next" onClick={() => setCurrentSong(prev => prev + 1)} title="Previous"></i>
    </div>
  );
};

export default Controls;
