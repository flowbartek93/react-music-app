import React, { useEffect, useState, useRef } from "react";

const Controls = ({ player, list }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  const title = useRef(null);
  const artist = useRef(null);

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
    if (currentSong > list[currentCategory].length - 1) {
      setCurrentSong(0);
    } else if (currentSong < 0) {
      setCurrentSong(list[currentCategory].length - 1);
    } else {
      player.current.src = list[currentCategory][currentSong].source;
      title.current.textContent = list[currentCategory][currentSong].name;
      artist.current.textContent = list[currentCategory][currentSong].artist;
    }

    if (isPlaying) {
      player.current.play();
    }
  }, [currentSong]);

  return (
    <>
      <h2 id="title" ref={title}></h2>
      <h3 id="artist" ref={artist}></h3>

      <div className="player-controls">
        <i className="fas fa-backward" onClick={() => setCurrentSong(prev => prev - 1)} id="prev" title="Previous"></i>
        <i className={`fas fa-${isPlaying ? "pause" : "play"}-circle main-button`} onClick={playMusic} id="play" title="Play"></i>
        <i className="fas fa-forward" id="next" onClick={() => setCurrentSong(prev => prev + 1)} title="Previous"></i>
      </div>
    </>
  );
};

export default Controls;
