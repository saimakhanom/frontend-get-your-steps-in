import { useEffect, useState } from "react";
import Footer from "./Footer";
import soundFile from "../assets/sound.mp3";

export const Page = ({ gameStarted }) => {
  const sound = new Audio(soundFile);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying); 
  };

  useEffect(() => {
    if (isPlaying) {
      sound.play()
    } else {
      sound.pause();
      sound.currentTime = 0;
    }
  }, [isPlaying]);

  // const toggleSound = () => {
  //   if(isPlaying) {
  //     sound.play();
  //     setIsPlaying(true)
  //   }
  //   else if (!isPlaying) {
  //     sound.pause();
  //     setIsPlaying(false)
  //   }
  //   setIsPlaying(isPlaying);
  // };

  if (!gameStarted) {
    return (
      <div className="blurry-screen">
        <div className="title">
          <h1>Get Your Steps In!</h1>
        </div>
        <div className="controls">
          <button onClick={handlePlay}> Toggle Music </button>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(event)=>handleVolumeChange(event)}
          />
          <div className="instructions">
            <h2>Instructions </h2>
            <p>
              Welcome to Get Your Steps In, a thrilling adventure where you'll
              embark on a journey to win the ultimate prize — a delicious kebab!
              But it won't be an easy task, to earn your savory reward you'll
              need to get some serious steps in for the day. Avoid hitting the
              obstacles in your path or you'll lose your motivation! Remember,
              every step counts...
            </p>
          </div>
          <h2 className="ctrl-title">Controls</h2>
          <p>
            <b>Left Arrow:</b> Left
          </p>
          <p>
            <b>Right Arrow:</b> Right
          </p>
          <p>
            <b>Space:</b> Jump
          </p>
          <button className="start-btn">Press Any Key To Start</button>
        </div>
        <Footer />
      </div>
    );
  }
};
