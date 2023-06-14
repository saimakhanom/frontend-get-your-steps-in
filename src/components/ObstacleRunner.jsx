import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Clone, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import runner from "../assets/character.glb";
import { RigidBody, interactionGroups } from "@react-three/rapier";

const ObstacleRunner = ({ position, scale }) => {
  const model = useLoader(GLTFLoader, runner);
  const modelAnimations = useAnimations(model.animations, model.scene);
  const charRunning = "CharacterArmature|Run";
  const charIdle = "CharacterArmature|Idle";

  useEffect(() => {
    const action = modelAnimations.actions[charRunning];
    action.reset().fadeIn(0.5).play();
    return () => {
      action.fadeOut(0.5);
    };
  }, [modelAnimations.actions, charRunning]);

  return (
    <RigidBody
      type="fixed"
      name="obstacleRunner"
      collisionGroups={interactionGroups(1, [0])}
    >
      <Clone
        object={model.scene}
        position={position}
        rotation={[0, 0, 0]}
        scale={scale}
      />
    </RigidBody>
  );
};

export default ObstacleRunner;
