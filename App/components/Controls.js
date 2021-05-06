import React from "react";

const Controls = () => {
  return (
    <div className="player-controls">
      <i className="fas fa-backward" id="prev" title="Previous"></i>
      <i className="fas fa-play-circle main-button" id="play" title="Play"></i>
      <i className="fas fa-forward" id="next" title="Previous"></i>
    </div>
  );
};

export default Controls;
