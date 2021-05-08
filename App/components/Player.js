import React, { useEffect } from "react";

import Progress from "./Progress";
import Audio from "./Audio";
const Player = () => {
  return (
    <div className="player-container">
      <div className="img-container"></div>

      <Audio />
      <Progress />
    </div>
  );
};

export default Player;
