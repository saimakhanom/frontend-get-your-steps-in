export default function Path({pathLength}) {
 
  return (
  
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
        <planeGeometry args={[15, pathLength]} />
        <meshStandardMaterial color="grey" />
      </mesh>

  );
}
