import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import runnerFile from "../assets/Hoodie-Character.glb";
import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Character = () => {
  // when the game is ready we will have a state that changes based on buttons pressed/timings etc that will replace the hardcoded animation variables

  const model = useLoader(GLTFLoader, runnerFile);
  const modelAnimations = useAnimations(model.animations, model.scene);
  const charRunning = "CharacterArmature|Run";
  const charWalk = "CharacterArmature|Walk";
  const charIdle = "CharacterArmature|Idle";
  const charDeath = "CharacterArmature|Death";

  useEffect(() => {
    const action = modelAnimations.actions[charRunning];
    action.reset().fadeIn(0.5).play();
    return () => {
      action.fadeOut(0.5);
    };
  }, [modelAnimations.actions, charRunning]);

  return (
    <RigidBody args={[0.1, 0.1, 0.1]}>
      <Box>
        <primitive
          object={model.scene}
          scale={1.2}
          position={[0, 1.2, 4]}
          rotation={[0, -3.14, 0]}
        />
      </Box>
    </RigidBody>
  );
};

export default Character;
