import { useEffect, useState } from "react";
import fist from "../assets/fist.png";

function Motivation({ motivation, setShowGameOver, showGameOver }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (motivation === 0) {
      setText("Game over!");
      const timeout = setTimeout(() => {
        setShowGameOver(true);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setText(`Motivation:`);
    }
  }, [motivation, setShowGameOver]);

  let motivationIcons = Array(motivation).fill(1);

  return (
    <>
      {motivation > 0 && (
        <div className="motivation">
          <h2 className="text"> {text} </h2>
          {motivationIcons.map((icon, index) => {
            return (
              <img key={index} src={fist} alt="fist icon" className="fist" />
            );
          })}
        </div>
      )}
       {showGameOver && (
        <div className="game-over">
          <h2 className="text">{text}</h2>
        </div>
      )}
    </>
  );
}

export default Motivation;
