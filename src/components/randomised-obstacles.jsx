import { generateRandomPathPosition } from "../utils/random-path-points";


export default function RandomisedObstacles({ planeDimensions }) {
  const {pathWidth, pathLength} = planeDimensions
    const numBoxes = 10; // Number of boxes to generate
    const pathConstraint = pathLength/2
    const boxSize = 1; // Size of each box
  
    const boxPositions = Array.from({ length: numBoxes }, () => generateRandomPathPosition(boxSize, pathConstraint, pathWidth));

    return (
        <>
         {boxPositions.map((position, index) => (
        <mesh key={index} position={position}>
          <boxGeometry args={[boxSize, boxSize, boxSize]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      ))}
        </>
    )
}

