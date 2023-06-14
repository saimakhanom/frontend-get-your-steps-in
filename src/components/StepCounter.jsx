import { useEffect, useState } from "react";

function StepCounter() {
  const [score, setScore] = useState(0);
  const [interval, setInterval] = useState(500)
  const [timer, setTimer] = useState(0)


  useEffect(() => {
    setTimeout(() => {
      setTimer((s) => s + 1);
    }, 1000)
  
    if (timer%25 === 0 && timer !== 0){
      setInterval((currentInterval) => currentInterval*0.6)
    }

    setTimeout(() => {
      setScore((s) => s + 1);
    }, interval);
  }, [score]);

  return (
    <div className="container">
      <h2 className="testScore">Step Count: {score} </h2>
    </div>
  );
}

export default StepCounter;
