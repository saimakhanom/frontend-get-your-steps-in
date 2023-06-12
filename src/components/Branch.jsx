import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import branchFile from "../assets/Branch.glb"
import { RigidBody } from "@react-three/rapier";

const Branch = () => {

  const model = useLoader(GLTFLoader, branchFile );

  return ( 
    <RigidBody>
      <primitive
        object={model.scene}
        scale={0.5}
        position={[2, 0.3, -4]}
        rotation={[0, -3.14, 0]}
      />
    </RigidBody>
  );
}
 
export default Branch;