import KebabGLB from "../assets/Kebab.glb";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

export default function Kebab({position, scale, rotationSpeed}) {
  const model = useLoader(GLTFLoader, KebabGLB);
  const kebabRef = useRef();

  useFrame(() => {
    kebabRef.current.rotation.y += rotationSpeed;
  });
  return (
    <>
      <primitive
        ref={kebabRef}
        object={model.scene}
        position={position}
        rotation={[0, -3.14, 180]}
        scale={scale}
      />
    </>
  );
}
