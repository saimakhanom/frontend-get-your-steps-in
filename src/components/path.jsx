export default function Path({ planeDimensions }) {
  const { pathLength } = planeDimensions;
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
      <planeGeometry args={[10, pathLength]} receiveShadow />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
}
