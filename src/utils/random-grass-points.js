export const generateRandomGrassPosition = (objectSize, pathConstraint, pathWidth) => {
    const x = Math.random() * (pathWidth - objectSize) - (pathWidth/2) + objectSize / 2;
    const z = -(Math.random() * (pathConstraint - objectSize - 2) + 2);
    const y = -1.9 + objectSize / 2; // Same y-coordinate as the path component

    return [x, y, z];
  };