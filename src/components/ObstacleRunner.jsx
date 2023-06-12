import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import runner from "../assets/Hoodie-Character.glb"

const ObstacleRunner = () => {

  const model = useLoader(GLTFLoader, runner );
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
    <primitive
      object={model.scene}
      scale={1.2}
      position={[2.5, -1.9, -20]}
      rotation={[0, 0, 0]}
    />
  );
};

export default ObstacleRunner;