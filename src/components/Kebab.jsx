import KebabGLB from "../assets/Kebab.glb";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

export default function Kebab() {
  const model = useLoader(GLTFLoader, KebabGLB);
  const kebabRef = useRef();

  useFrame(() => {
    kebabRef.current.rotation.y += .1;
  });
  return (
    <>
      <primitive
        ref={kebabRef}
        object={model.scene}
        position={[0, 11, -3927]}
        rotation={[0, -3.14, 180]}
        scale={1.5}
      />
    </>
  );
}
