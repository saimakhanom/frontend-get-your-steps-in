import { generateRandomPosition } from "../utils/generate-random-path-positions";

export default function RandomBoxes({pathLength}) {
    const numBoxes = 10; // Number of boxes to generate
    const pathConstraint = pathLength/2
    const boxSize = 1; // Size of each box
  
    const boxPositions = Array.from({ length: numBoxes }, () => generateRandomPosition(boxSize, pathConstraint));

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