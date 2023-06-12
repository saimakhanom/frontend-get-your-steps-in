const isNotOnPath = (x) => {
  if (x > 5 || x < -5) {
    return true;
  }
  return false;
};

const generateXPosition = (groundWidth, objectSize) => {
  return (
    Math.random() * (groundWidth - objectSize) -
    groundWidth / 2 +
    objectSize / 2
  );
};

export const generateRandomGrassPosition = (
  objectSize,
  pathConstraint,
  groundWidth
) => {
  let x = generateXPosition(groundWidth, objectSize);
  const y = -1.9 + objectSize / 2; // Same y-coordinate as the path component
  let z = Math.random() * (pathConstraint - objectSize - 2) + 2;
  if (Math.random() < 0.5) {
    z = -z; // Assign negative value to z randomly
  }
  if (isNotOnPath(x)) {
    return [x, y, z];
  }
};
