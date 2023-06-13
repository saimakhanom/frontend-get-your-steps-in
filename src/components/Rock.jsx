import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import rockFile from "../assets/Rocks.glb";
import { RigidBody } from "@react-three/rapier";

const Rock = () => {
  const model = useLoader(GLTFLoader, rockFile);

  return ( 
    <RigidBody>
      <primitive
        object={model.scene}
        scale={6}
        position={[-2, 0.3, -10]}
        rotation={[0, -3.14, 0]}
      />
    </RigidBody>
  );
};

export default Rock;
