import React, { useEffect } from "react";

import Controls from "./Controls";
import Progress from "./Progress";

const Player = () => {
  return (
    <div className="player-container">
      <div className="img-container"></div>
      <h2 id="title">Electric Chill</h2>
      <h3 id="artist">Jacinsto</h3>

      <Controls />
      <Progress />
    </div>
  );
};

export default Player;
