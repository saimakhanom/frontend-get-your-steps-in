import { generateRandomPathPosition } from "../utils/random-path-points";

export default function RandomisedObstacles({
  planeDimensions,
  Component,
  objectSize = 1,
  numObjects = 10,
}) {
  const { pathWidth, pathLength } = planeDimensions;
  const pathConstraint = pathLength / 2;

  const objectPositions = Array.from({ length: numObjects }, () =>
    generateRandomPathPosition(objectSize, pathConstraint, pathWidth)
  );

  return (
    <>
      {objectPositions.map((position, index) => {
       return <Component
          key={index}
          position={position}
          scale={objectSize}
        />;
      })}
    </>
  );
}
