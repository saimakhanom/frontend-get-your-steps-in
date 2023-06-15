import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import rockFile from "../assets/Rocks.glb";
import { CylinderCollider, RigidBody, interactionGroups } from "@react-three/rapier";
import { Clone } from "@react-three/drei";

const Rock = ({ position, scale }) => {
  const model = useLoader(GLTFLoader, rockFile);

  return (
    <RigidBody
      type="dynamic"
      name="rock"
      colliders={false}
      collisionGroups={interactionGroups(1, [0])}
      // density={5}
      linearDamping={1}
      angularDamping={1}
    >
       <CylinderCollider args={[0.1, 0.8]} position={position} />
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
