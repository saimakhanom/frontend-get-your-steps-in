import { useEffect, useState } from "react";

function StepCounter({motivation, score, setScore, win}) {
  const [interval, setInterval] = useState(500)
  const [timer, setTimer] = useState(0)


  useEffect(() => {
    setTimeout(() => {
      setTimer((s) => s + 1);
      if (timer % 15 === 0 && timer !== 0){
        setInterval((currentInterval) => currentInterval*0.6)
      }
    }, 1000)
  }, [timer])

  useEffect(() => {
    if (motivation > 0 || win) {
    setTimeout(() => {
      setScore((s) => s + 1);
    }, interval);
  }}, [score, interval, motivation]);

  return (
    <div className="score">
      <h2 className="text">Step Count: {score} </h2>
    </div>
  );
}

export default StepCounter;
