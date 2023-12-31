import { useMemo } from "react";
import { generateRandomBenchPosition } from "../utils/random-bench-points";

export default function RandomisedBenchComponents({
  planeDimensions,
  Component,
  objectSize = 1,
  numObjects = 10,
  buffer = 10,
}) {
  const { pathLength, groundWidth } = planeDimensions;
  const pathConstraint = pathLength / 2;

  const objectPositions = useMemo(() => {
    return Array.from({ length: numObjects }, () =>
      generateRandomBenchPosition(
        buffer,
        objectSize,
        pathConstraint,
        groundWidth
      )
    );
  }, [buffer, objectSize, pathConstraint, groundWidth, numObjects]);

  return (
    <>
      {objectPositions.map((position, index) => {
        if (position === undefined) {
          return null;
        }
        return <Component key={index} position={position} scale={objectSize} />;
      })}
    </>
  );
}