import { RigidBody, interactionGroups } from "@react-three/rapier";

export default function Path({ planeDimensions }) {
  const { pathLength } = planeDimensions;

  return (
    <RigidBody
      type="fixed"
      colliders="trimesh"
      collisionGroups={interactionGroups(2, [3])}
    >
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <planeGeometry args={[10, pathLength]} receiveShadow />
        <meshStandardMaterial color="grey" />
      </mesh>
    </RigidBody>
  );
}
