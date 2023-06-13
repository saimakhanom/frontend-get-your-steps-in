import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import rockFile from "../assets/Rocks.glb";
import { RigidBody, interactionGroups } from "@react-three/rapier";
import { Clone } from "@react-three/drei";

const Rock = ({ position, scale }) => {
  const model = useLoader(GLTFLoader, rockFile);

  return (
    <RigidBody type="fixed" 
    name="rocks"
    collisionGroups={interactionGroups(1, [0])}
    >
      <Clone
        object={model.scene}
        position={position}
        rotation={[0, -3.14, 0]}
        scale={scale}
      />
    </RigidBody>
  );
};

export default Rock;
