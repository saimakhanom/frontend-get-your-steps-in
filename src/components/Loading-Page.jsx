import { useEffect, useState } from "react";
import { VscGithub } from "react-icons/vsc";

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
            <a href="https://github.com/dave-hickman" target="_blank">
              <div className="name-item">
                <VscGithub />
                <li>Λ Dave Hickman</li>
              </div>
            </a>
            <a href="https://github.com/jorgemf2604" target="blank">
            <div className="name-item">
              <VscGithub />
              <li>Λ Jorge Martin</li>
            </div>
            </a>
            <a href="https://github.com/Joelymodevs" target="blank">
            <div className="name-item">
              <VscGithub />
              <li>Λ Joel Morton</li>
            </div>
            </a>
            <a href="https://github.com/NadiaIb" target="blank">
            <div className="name-item">
              <VscGithub />
              <li>Λ Nadia Ibrahim</li>
            </div>
            </a>
            <a href="https://github.com/saimakhanom" target="blank">
              <div className="name-item">
                <VscGithub />
                <li>Λ Saima Khanom</li>
              </div>
            </a>
          </ul>
        </footer>
      </div>
    );
  }
};
