import { useEffect, useState } from "react";
import fist from "../assets/fist.png";

function Motivation({ motivation }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (motivation === 0) {
      setText("Game over!");
    } else {
      setText(`Motivation: `);
    }
  }, [motivation]);

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
      {motivation === 0 && (
        <div className="game-over">
          <h2 className="text">{text}</h2>
        </div>
      )}
    </>
  );
}

export default Motivation;
