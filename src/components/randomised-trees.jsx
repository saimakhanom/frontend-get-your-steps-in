import { generateRandomPathPosition } from "../utils/random-path-points";
import Tree from "./tree";

export default function RandomisedTrees({ pathDimensions }) {
  const { pathLength, pathWidth } = pathDimensions;
  const pathConstraint = pathLength / 2;
  const numTrees = 10;
  const treeSize = 1.2;

  const treePositions = Array.from({ length: numTrees }, () =>
    generateRandomPathPosition(treeSize, pathConstraint, pathWidth)
  );

  return (
    <>
      {treePositions.map((position, index) => (
          <Tree key={index} treePosition={position} treeSize={treeSize} /> 
      ))}
    </>
  );
}
