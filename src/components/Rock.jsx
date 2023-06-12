import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import rockFile from "../assets/Rocks.glb"

const Rock = () => {

  const model = useLoader(GLTFLoader, rockFile );

  return ( 
    <primitive
      object={model.scene}
      scale={6}
      position={[-2, -1, -10]}
      rotation={[0, -3.14, 0]}
    />
  );
}
 
export default Rock;