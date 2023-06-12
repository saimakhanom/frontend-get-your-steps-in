export const generateRandomPosition = (boxSize, pathConstraint) => {
    const x = Math.random() * (15 - boxSize) - 7.5 + boxSize / 2;
    const z = -(Math.random() * (pathConstraint - boxSize - 2) + 2);
    const y = -1.9 + boxSize / 2; // Same y-coordinate as the path component

    return [x, y, z];
  };