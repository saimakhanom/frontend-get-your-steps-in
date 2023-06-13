import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import grass from "../assets/Grass.glb"
import { RigidBody } from "@react-three/rapier";
import { Clone } from "@react-three/drei";

const Branch = ({position, scale}) => {
  const model = useLoader(GLTFLoader, grass);

  return ( 
    <RigidBody>
       <Clone
      object={model.scene}
      position={position}
      rotation={[0, -3.14, 0]}
      scale={scale}
    />
    </RigidBody>
  );
}
 
export default Branch;