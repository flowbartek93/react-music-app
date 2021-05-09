import React, { useEffect, useState, useRef, useContext } from "react";

const Controls = ({ player, list, category, width }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const title = useRef(null);
  const artist = useRef(null);
  const image = useRef(null);
  const progressBar = useRef(null);

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
    if (currentSong > list[category].length - 1) {
      setCurrentSong(0);
    } else if (currentSong < 0) {
      setCurrentSong(list[category].length - 1);
    } else {
      player.current.src = list[category][currentSong].source;
      title.current.textContent = list[category][currentSong].name;
      artist.current.textContent = list[category][currentSong].artist;
      image.current.src = list[category][currentSong].img;
    }

    if (isPlaying) {
      player.current.play();
    }
  }, [currentSong, category]);

  useEffect(() => {
    if (isPlaying) {
      progressBar.current.style.width = width;
    }
  }, [width]);

  useEffect(() => {
    progressBar.current.style.width = "0%";
  }, [currentSong]);

  return (
    <>
      <div className="img-container">
        <img ref={image} className="image" src="" alt="" />
      </div>

      <h2 id="title" ref={title}></h2>
      <h3 id="artist" ref={artist}></h3>

      <div className="player-controls">
        <i className="fas fa-backward" onClick={() => setCurrentSong(prev => prev - 1)} id="prev" title="Previous"></i>
        <i className={`fas fa-${isPlaying ? "pause" : "play"}-circle main-button`} onClick={playMusic} id="play" title="Play"></i>
        <i className="fas fa-forward" id="next" onClick={() => setCurrentSong(prev => prev + 1)} title="Previous"></i>
      </div>

      <div className="progress-container" id="progress-container">
        <div ref={progressBar} className="progress" id="progress"></div>
        <div className="duration-wrapper">
          <span id="current-time">00:00</span>
          <span id="duration">2:06</span>
        </div>
      </div>
    </>
  );
};

export default Controls;
