import { useEffect, useState } from "react";

function StepCounter() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setScore((s) => s + 1);
    }, 500);
  }, [score]);

  return (
    <div className="container">
      <h2 className="testScore">Step Count: {score} </h2>
    </div>
  );
}

export default StepCounter;
