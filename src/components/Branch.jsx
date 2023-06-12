import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import branchFile from "../assets/Branch.glb"

const Branch = () => {

  const model = useLoader(GLTFLoader, branchFile );

  return ( 
    <primitive
      object={model.scene}
      scale={0.5}
      position={[2, -1.8, -4]}
      rotation={[0, -3.14, 0]}
    />
  );
}
 
export default Branch;