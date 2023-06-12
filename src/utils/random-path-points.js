export const generateRandomPosition = (boxSize, pathConstraint, pathWidth) => {
    const x = Math.random() * (pathWidth - boxSize) - (pathWidth/2) + boxSize / 2;
    const z = -(Math.random() * (pathConstraint - boxSize - 2) + 2);
    const y = -1.9 + boxSize / 2; // Same y-coordinate as the path component

    return [x, y, z];
  };