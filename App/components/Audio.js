import React, { useEffect, useRef, useState } from "react";
import track1 from "../../src/hiphop/Bonkers-Club.mp3";
import track2 from "../../src/hiphop/Dylan-Sitts.mp3";
import track3 from "../../src/hiphop/bensound-groovyhiphop.mp3";

import track4 from "../../src/joyful/Feeling-Free.mp3";
import track5 from "../../src/joyful/Happy_Dreams-David_Fesliyan.mp3";
import track6 from "../../src/joyful/Super_Spiffy-David_Fesliyan.mp3";

import track7 from "../../src/relaxing/Quiet-Time.mp3";
import track8 from "../../src/relaxing/Time-Alone.mp3";
import track9 from "../../src/relaxing/Upon-Reflection.mp3";

//tracks

import Controls from "./Controls";

const Audio = () => {
  const songList = [
    [
      {
        name: "Fifteen on Me",
        artist: "Bonkers Club",
        source: track1
      },
      {
        name: "Bales",
        artist: "Dylan Sitts",
        source: track2
      },
      {
        name: "Groovy HipHop",
        artist: "Be sound",
        source: track3
      }
    ],
    [
      {
        name: "Feeling free",
        artist: "Fesyllan Studios",
        source: track4
      },
      {
        name: "Happy Dreams",
        artist: "Fesyllan Studios",
        source: track5
      },
      {
        name: "Super Spiffy",
        artist: "Fesyllan Studios",
        source: track6
      }
    ],
    [
      {
        name: "Quiet Time",
        artist: "Fesyllan Studios",
        source: track7
      },
      {
        name: "Time Alone",
        artist: "Fesyllan Studios",
        source: track8
      },
      {
        name: "Upon Relfection",
        artist: "Fesyllan Studios",
        source: track9
      }
    ]
  ];

  const musicPlayer = useRef(null);

  const [category, setCategory] = useState(0);
  const categories = useRef(null);

  useEffect(() => {
    try {
      console.log(category);
      categories.current.children[category].classList.add("visible");
    } catch (e) {
      console.log(e);
    }
  }, [category]);

  const nextCategory = () => {
    if (category >= categories.current.children.length - 1) {
      setCategory(prev => {
        categories.current.children[prev].classList.remove("visible");
        return 0;
      });
    } else {
      setCategory(prev => {
        categories.current.children[prev].classList.remove("visible");
        return prev + 1;
      });
    }
  };

  const prevCategory = () => {
    if (category <= 0) {
      setCategory(prev => {
        categories.current.children[prev].classList.remove("visible");
        return categories.current.children.length - 1;
      });
    } else {
      setCategory(prev => {
        categories.current.children[prev].classList.remove("visible");
        return prev - 1;
      });
    }
  };

  return (
    <>
      <div className="select-category">
        <i onClick={prevCategory} className="fas fa-angle-left"></i>
        <div ref={categories} className="categories">
          <h3 className="category hidden">Hip-Hop</h3>
          <h3 className="category hidden">Relaxing</h3>
          <h3 className="category hidden">Joyful</h3>
        </div>
        <i onClick={nextCategory} className="fas fa-angle-right"></i>
      </div>

      <Controls player={musicPlayer} list={songList} />
      <audio className="music" ref={musicPlayer}></audio>
    </>
  );
};

export default Audio;
