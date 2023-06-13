import { generateRandomGrassPosition } from "../utils/random-grass-points";

export default function RandomisedGrassComponents({ planeDimensions, Component, objectSize = 1, numObjects=10, buffer=10  }) {
  const { pathLength, groundWidth } = planeDimensions;
  const pathConstraint = pathLength / 2;

  const objectPositions = Array.from({ length: numObjects }, () =>
    generateRandomGrassPosition(buffer, objectSize, pathConstraint, groundWidth)
    );

  return (
    <>
      {objectPositions.map((position, index) => {
        if (position === undefined) {
          return null;
        }
          return <Component key={index} position={position} scale={objectSize} /> 
      })}
    </>
  );
}
