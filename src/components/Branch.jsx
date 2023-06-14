import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import branchFile from "../assets/Branch.glb";
import { CylinderCollider, RigidBody, interactionGroups } from "@react-three/rapier";
import { Clone } from "@react-three/drei";
import { useState } from "react";

const Branch = ({ position, scale }) => {
  const model = useLoader(GLTFLoader, branchFile);

  return (
    <RigidBody type="dynamic" 
      name="branch"
      colliders={false}
      collisionGroups={interactionGroups(1, [0])}>
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

export default Branch;
