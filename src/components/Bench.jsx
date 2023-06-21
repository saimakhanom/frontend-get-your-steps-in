import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import benchFile from "../assets/Bench2.glb"
import { Clone } from "@react-three/drei";

const Bench = ({ position, scale }) => {
  const model = useLoader(GLTFLoader, benchFile);

  return (
    <>
      <Clone
        object={model.scene}
        position={position}
        rotation={[0, Math.PI, 0]}
        scale={scale}
      />
    </>
  );
};

export default Bench;
