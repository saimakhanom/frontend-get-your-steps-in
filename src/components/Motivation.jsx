import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fist from "../assets/fist.png";

function Motivation({ motivation }) {
  const motivationalMessages = [
    "Run like the wind, or at least like a man about to get a kebab!",
    "Keep running, the kebab shop is just around the corner!",
    "Pain is temporary, but the glory of a kebab lasts forever!",
    "You're faster than a spinning kebab skewer!",
    "Imagine the taste of victory... and the taste of a mouthwatering kebab!",
    "Imagine the victory dance you'll do when you get to the kebab shop!",
    "Run like a champ, then treat yourself to some well-deserved kebab!",
    "Don't stop! The world needs more superheroes in sweatbands!",
  ];
  const notify = () =>
    toast(
      motivationalMessages[
        Math.floor(Math.random() * motivationalMessages.length)
      ]
    );

  useEffect(() => {
    if (motivation === 2 || motivation === 1) {
      notify();
    }
  }, [motivation]);

  let motivationIcons = Array(motivation).fill(1);

  return (
    <>
      <ToastContainer
        className="toast-position"
        position="top-left"
        autoClose={1000}
        limit={1}
        hideProgressBar={true}
      />
      {motivation > 0 && (
        <div className="motivation">
          <h2 className="text"> Motivation: </h2>
          {motivationIcons.map((icon, index) => {
            return (
              <img key={index} src={fist} alt="fist icon" className="fist" />
            );
          })}
        </div>
      )}
      {motivation === 0 && (
        <div className="game-over">
          <h2 className="text">Game over!</h2>
          <p className="game-over-message">Time for a kebab...</p>
        </div>
      )}
    </>
  );
}

export default Motivation;
