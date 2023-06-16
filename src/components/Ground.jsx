import { TextureLoader, RepeatWrapping } from "three";
import { RigidBody } from "@react-three/rapier";
import { useMemo } from "react";
import grass from "../assets/imgonline-com-ua-Texture-seamless-4K4g9WBhIWlU.png"

export default function Ground({ planeDimensions }) {
    const texture = useMemo(()=>{
        return new TextureLoader().load(grass)}, []);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(10000, 10000);

  return (
    <RigidBody type="fixed" friction={2}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[1000, planeDimensions.pathLength]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </RigidBody>
  );
}
