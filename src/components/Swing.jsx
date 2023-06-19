import swingGLB from "../assets/Swing.glb"
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Clone } from "@react-three/drei";

export default function Swing({position, scale}) {
  const model = useLoader(GLTFLoader, swingGLB);

  return (
    <>
      <Clone
        object={model.scene}
        position={position}
        rotation={[0, -3.14, 0]}
        scale={scale}
      />
    </>
  );
}
