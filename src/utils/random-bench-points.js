const isNotOnPath = (x) => {
    if ((x > 6  || x < -6) && x !== 0) {
      return true;
    }
    return false;
  };
  
  
  export const generateRandomBenchPosition = (
    buffer,
    objectSize,
    pathConstraint,
  ) => {
    let x = Math.floor(Math.random() * (30/2 - buffer) -
    30 / 2 +
    buffer / 2);
    const y = -1.2 + objectSize / 2;
    let z = Math.random() * (pathConstraint - buffer - 2) + 2;
    if (Math.random() < 0.5) {
      z = -z;
    }
    if (isNotOnPath(x)) {
      return [x, y, z];
    }
  };