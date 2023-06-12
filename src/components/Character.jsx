import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useControls } from "leva";
import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Character = () => {
  // when the game is ready we will have a state that changes based on buttons pressed/timings etc that will replace the hardcoded animation variables

  const model = useLoader(GLTFLoader, "./character.glb");
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

  const controls = useControls("character", {
    positionX: { value: 0, min: -10, max: 10, step: 0.01 },
  });
  return (
    <primitive
      object={model.scene}
      scale={1.2}
      position={[controls.positionX, -1.9, 0]}
      rotation={[0, -3.14, 0]}
    />
  );
};

export default Character;
