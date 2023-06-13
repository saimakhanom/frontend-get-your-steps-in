export const generateRandomPathPosition = (
  objectSize,
  pathConstraint,
  pathWidth
) => {
  const x =
    Math.random() * (pathWidth - objectSize) - pathWidth / 2 + objectSize / 2;
  const z = -(Math.random() * (pathConstraint - objectSize - 2) + 2);
  let y;
  if (objectSize > 1) {
    y = -2.3 + objectSize / 2;
  } else if (objectSize < 1) {
    y = 0 + objectSize / 2;
  } else {
    y = -0.3 + objectSize / 2;
  }

  return [x, y, z];
};
