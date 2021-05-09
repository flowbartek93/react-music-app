import React, { useEffect, useState, useRef } from "react";

const Controls = ({ list, category }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [width, setWidth] = useState("");

  const title = useRef(null);
  const artist = useRef(null);
  const image = useRef(null);
  const progressBar = useRef(null);

  const musicPlayer = useRef(null);

  const playMusic = () => {
    if (isPlaying) {
      musicPlayer.current.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      musicPlayer.current.play();
    }
  };

  const loadMetaData = item => {
    const el = document.querySelector("#duration");

    const durationMinutes = Math.floor(item.duration / 60);

    let durationSeconds = Math.floor(item.duration % 60);

    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    //delay

    if (durationSeconds) {
      el.textContent = `${durationMinutes}:${durationSeconds}`;
    }
  };

  useEffect(() => {
    if (currentSong > list[category].length - 1) {
      setCurrentSong(0);
    } else if (currentSong < 0) {
      setCurrentSong(list[category].length - 1);
    } else {
      //Obsługa pojedynyczych kawałków

      musicPlayer.current.src = list[category][currentSong].source;
      title.current.textContent = list[category][currentSong].name;

      artist.current.textContent = list[category][currentSong].artist;
      image.current.src = list[category][currentSong].img;
    }

    if (isPlaying) {
      musicPlayer.current.play();
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

  const handleProgress = e => {
    const currentTimeEl = document.querySelector("#current-time");
    const { duration, currentTime } = e.nativeEvent.srcElement;

    const progressPercent = (currentTime / duration) * 100;
    setWidth(`${progressPercent}%`);

    //calculate display for current time
    const currentMinutes = Math.floor(currentTime / 60);

    let currentSeconds = Math.floor(currentTime % 60);

    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  };

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
          <span id="current-time">0:00</span>
          <span id="duration"></span>
        </div>
      </div>

      <audio preload="metadata" onLoadedMetadata={e => loadMetaData(e.target)} onTimeUpdate={handleProgress} className="music" ref={musicPlayer}></audio>
    </>
  );
};

export default Controls;
