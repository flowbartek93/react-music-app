import React, { useEffect } from "react";

import Progress from "./Progress";
import Audio from "./Audio";
const Player = () => {
  return (
    <div className="player-container">
      <div className="img-container"></div>
      <h2 id="title">Electric Chill</h2>
      <h3 id="artist">Jacinsto</h3>

      <Audio />
      <Progress />
    </div>
  );
};

export default Player;
