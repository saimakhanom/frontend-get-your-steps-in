import KebabGLB from "../assets/Kebab.glb";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

export default function KebabScoreboard() {
  const model = useLoader(GLTFLoader, KebabGLB);
  const kebabRef = useRef();

  useFrame(() => {
    kebabRef.current.rotation.y += .05;
  });
  return (
    <>
      <primitive
        ref={kebabRef}
        object={model.scene}
        scale={1}
        position={[0, -1, 0]}
        rotation={[0, -3.14, -100]}
      />
    </>
  );
}
