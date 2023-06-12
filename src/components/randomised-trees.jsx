import { generateRandomGrassPosition } from "../utils/random-grass-points";
import Tree from "./tree";

export default function RandomisedTrees({ planeDimensions }) {
  const { pathLength, groundWidth } = planeDimensions;
  const pathConstraint = pathLength / 2;
  const numTrees = 20;
    const treeSize = 1.2;


  const treePositions = Array.from({ length: numTrees }, () =>
    generateRandomGrassPosition(treeSize, pathConstraint, groundWidth)
    );
    
    console.log(treePositions)

  return (
    <>
      {treePositions.map((position, index) => (
          <Tree key={index} treePosition={position} treeSize={treeSize} /> 
      ))}
    </>
  );
}
