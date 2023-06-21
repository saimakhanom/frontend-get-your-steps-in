import { RigidBody, interactionGroups } from "@react-three/rapier";
import path from "../assets/15.png"
import { useMemo } from "react";
import { RepeatWrapping, TextureLoader } from "three";

export default function Path({ planeDimensions }) {
  const { pathLength } = planeDimensions;
  const texture = useMemo(()=>{
    return new TextureLoader().load(path)}, []);
texture.wrapS = RepeatWrapping;
texture.wrapT = RepeatWrapping;
texture.repeat.set(10, 5000);

  return (
    <RigidBody
      type="fixed"
      colliders="trimesh"
      collisionGroups={interactionGroups(2, [3])}
    >
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <planeGeometry args={[10, pathLength]} receiveShadow />
        <meshStandardMaterial map={texture} />
      </mesh>
    </RigidBody>
  );
}
