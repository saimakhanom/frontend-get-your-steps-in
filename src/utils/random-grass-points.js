const isNotOnPath = (x) => {
  if ((x > 6  || x < -6) && x !== 0) {
    return true;
  }
  return false;
};


export const generateRandomGrassPosition = (
  buffer,
  objectSize,
  pathConstraint,
  groundWidth
) => {
  let x = Math.floor(Math.random() * (groundWidth - buffer) -
  groundWidth / 2 +
  buffer / 2);
  const y = -1.9 + objectSize / 2; // Same y-coordinate as the path component
  let z = Math.random() * (pathConstraint - buffer - 2) + 2;
  if (Math.random() < 0.5) {
    z = -z; // Assign negative value to z randomly
  }
  if (isNotOnPath(x)) {
    return [x, y, z];
  }
};
