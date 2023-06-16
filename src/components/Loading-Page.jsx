import { useEffect, useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

export const Page = ({ setForward }) => {
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
    return (
      <div className="blurry-screen">
        <h1>Controls:</h1>
        <p>Left Arrow: Left</p>
        <p>Right Arrow: Right</p>
        <p>Space: Jump</p>
        <h2>Press any key to start!</h2>
        <footer>
          <ul className="names">
            <div className="name-item">
              <a href="https://github.com/dave-hickman" target="_blank" rel="noreferrer">
                <VscGithub />
              </a>
              <a href="https://www.linkedin.com/in/dave-hickman-dev/" target="_blank" rel="noreferrer">
                <SiLinkedin />
              </a>
              <li>Λ Dave Hickman</li>
            </div>
            <div className="name-item">
              <a href="https://github.com/jorgemf2604" target="_blank" rel="noreferrer">
                <VscGithub />
              </a>
              <a href="#">
                <SiLinkedin />
              </a>
              <li>Λ Jorge Martin</li>
            </div>
            <div className="name-item">
              <a href="https://github.com/Joelymodevs" target="_blank" rel="noreferrer">
                <VscGithub />
              </a>
              <a href="https://www.linkedin.com/in/joel-morton-557537275/" target="_blank" rel="noreferrer">
                <SiLinkedin />
              </a>
              <li>Λ Joel Morton</li>
            </div>
            <div className="name-item">
              <a href="https://github.com/NadiaIb" target="_blank" rel="noreferrer">
                <VscGithub />
              </a>
              <a href="https://www.linkedin.com/in/nadia-ibrahim-1422a4109/" target="_blank" rel="noreferrer">
                <SiLinkedin />
              </a>
              <li>Λ Nadia Ibrahim</li>
            </div>
            <div className="name-item">
              <a href="https://github.com/saimakhanom" target="_blank" rel="noreferrer">
                <VscGithub />
              </a>
              <a href="https://www.linkedin.com/in/saimakhanom/" target="_blank" rel="noreferrer">
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
