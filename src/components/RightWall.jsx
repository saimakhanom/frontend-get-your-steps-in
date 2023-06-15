import { MeshReflectorMaterial } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

function RightWall({ planeDimensions }) {
  const { pathLength } = planeDimensions;

  return (
    <RigidBody
      type="fixed"
      colliders="trimesh"
      //   collisionGroups={interactionGroups(2, [3])}
    >
      <mesh rotation={[-Math.PI / 2, -2, 0]} position={[5, 0.1, 0]}>
        <planeGeometry args={[5, pathLength]} receiveShadow />
        <meshStandardMaterial color="#ff0000" opacity={0.0} transparent />
        {/* <MeshReflectorMaterial opacity={0.0}/> */}
      </mesh>
    </RigidBody>
  );
}

export default RightWall;
