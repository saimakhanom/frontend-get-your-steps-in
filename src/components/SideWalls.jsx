import { RigidBody } from "@react-three/rapier";

function SideWalls({ planeDimensions }) {
  const { pathLength } = planeDimensions;

  return (
    <RigidBody
      type="fixed"
      colliders="trimesh"
    >
      <mesh rotation={[-Math.PI / 2, 2, 0]} position={[-5, 0.1, 0]}>
        <planeGeometry args={[5, pathLength]} receiveShadow />
        <meshStandardMaterial opacity={0.0}  transparent/>
        {/* <meshStandardMaterial color= "#ffffff" transparent /> */}
      </mesh>
    </RigidBody>
  );
}

export default SideWalls;
