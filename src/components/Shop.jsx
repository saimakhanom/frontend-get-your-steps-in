import ShopGLB from "../assets/Shop.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Clone } from "@react-three/drei";

export default function Shop() {
  const model = useLoader(GLTFLoader, ShopGLB);

  return (
    <>
      <primitive
        object={model.scene}
        position={[0,2.3,-4920]}
        rotation={[0, -3.14, 0]}
        scale={10}
      />
    </>
  );
}