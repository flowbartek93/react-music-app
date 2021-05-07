import React, { useEffect, useRef } from "react";
import track1 from "../../src/hiphop/Bonkers-Club.mp3";
import track2 from "../../src/hiphop/Dylan-Sitts.mp3";

//tracks

import Controls from "./Controls";

const Audio = () => {
  const songList = [track1, track2];
  const musicPlayer = useRef(null);

  return (
    <>
      <Controls player={musicPlayer} list={songList} />
      <audio className="music" ref={musicPlayer}></audio>
    </>
  );
};

export default Audio;
