import { useEffect, useState } from "react";

function StepCounter({motivation}) {
  const [score, setScore] = useState(0);
  const [interval, setInterval] = useState(500)
  const [timer, setTimer] = useState(0)


  useEffect(() => {
    if (motivation > 0) {
    setTimeout(() => {
      setTimer((s) => s + 1);
    }, 1000)
  
    if (timer%25 === 0 && timer !== 0){
      setInterval((currentInterval) => currentInterval*0.6)
    }

    setTimeout(() => {
      setScore((s) => s + 1);
    }, interval);
  }}, [score]);

  return (
    <div className="score">
      <h2 className="text">Step Count: {score} </h2>
    </div>
  );
}

export default StepCounter;
