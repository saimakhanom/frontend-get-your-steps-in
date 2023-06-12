import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const ObstacleRunner = () => {

  const model = useLoader(GLTFLoader, "../assets/Hoodie-Character.glb");
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
      position={[0, -1.9, 0]}
      rotation={[0, 3.14, 0]}
    />
  );
};

export default ObstacleRunner;