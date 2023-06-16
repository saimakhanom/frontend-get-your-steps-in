import { useEffect, useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

export const Page = ({ setForward, setScore }) => {
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const handleKeyPress = () => {
      setGameStarted(true);
      setForward(-20);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });
  if (!gameStarted) {
    setForward(0);
    setScore(0);
    return (
      <div className="blurry-screen">
        <div className="title">
          <h1>Get Your Steps In!</h1>
        </div>
        <div className="controls">
          <h2>Controls</h2>
          <p>
            <b>Left Arrow:</b> Left
          </p>
          <p>
            <b>Right Arrow:</b> Right
          </p>
          <p>
            <b>Space:</b> Jump
          </p>
            <button>Press Any Key To Start</button>
          <h1 className="seperator">--------------</h1>
          <div className="instructions">
            <h2>Instructions </h2>
            <p>
              The aim of the game is to avoid as many obstacles as you can as
              you gradually speed up throughout the path , avoid trees and rocks
              and other runners. If you look at the top left you will notice
              that you have a motivation bar, if it dips below 0 the game is
              over!
            </p>

            <h1 className="seperator">--------------</h1>
          </div>
          <div className="synopsis">
            <h2>Synopsis </h2>
            <p>
              This game tells the story of John, a lad who spends every night
              downing redstripes on his sofa until his parter got him a fitbit,
              he then realised that they set him a step goal for each day, and
              is making up for his unhealthy lifestyle
            </p>
          </div>
        </div>
        <footer>
          <ul className="names">
            <div className="name-item">
              <a
                href="https://github.com/dave-hickman"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dave-hickman-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <li>Λ Dave Hickman</li>
            </div>
            <div className="name-item">
              <a
                href="https://github.com/jorgemf2604"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a href="#">
                <SiLinkedin />
              </a>
              <li>Λ Jorge Martin</li>
            </div>
            <div className="name-item">
              <a
                href="https://github.com/Joelymodevs"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/joel-morton-557537275/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <li>Λ Joel Morton</li>
            </div>
            <div className="name-item">
              <a
                href="https://github.com/NadiaIb"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nadia-ibrahim-1422a4109/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <li>Λ Nadia Ibrahim</li>
            </div>
            <div className="name-item">
              <a
                href="https://github.com/saimakhanom"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saimakhanom/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <li>Λ Saima Khanom</li>
            </div>
          </ul>
        </footer>
      </div>
    );
  }
};
