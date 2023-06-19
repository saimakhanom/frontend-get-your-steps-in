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
          <div className="instructions">
            <h2>Instructions </h2>
            <p>
              You are playing as John, a lad hell-bent on getting his steps in,
              on his journey he encounters a load of obstacles blocking his
              path. If he were to
              hit one of these obstacles it would decrease his motivation to
              continue running, if he hits 3 obstacles he's off for a kebab...
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
