import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fist from "../assets/fist.png";

function Motivation({ motivation }) {
  const motivationalMessages = [
    "Run like the wind, or at least like a caffeinated squirrel!",
    "Keep running, the ice cream truck is just around the corner!",
    "Pain is temporary, but the glory of finishing lasts forever!",
    "You're running faster than a cat chasing a laser pointer!",
    "Imagine the victory dance you'll do at the finish line!",
    "You're running so well, even the tortoise is impressed!",
    "Keep going, disco diva! Your moves are rocking the pavement!",
    "You're crushing it! The road is your dance floor!",
    "Run like a champ, then treat yourself to some well-deserved Netflix!",
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
        </div>
      )}
    </>
  );
}

export default Motivation;
