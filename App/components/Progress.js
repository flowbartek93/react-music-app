import React, { useEffect } from "react";

const Progress = () => {
  return (
    <div className="progress-container" id="progress-container">
      <div className="progress" id="progress"></div>
      <div className="duration-wrapper">
        <span id="current-time">00:00</span>
        <span id="duration">2:06</span>
      </div>
    </div>
  );
};

export default Progress;
