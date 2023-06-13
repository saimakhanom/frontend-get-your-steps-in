import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useAnimations } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import runnerFile from "../assets/Hoodie-Character.glb";
import { Box } from "@react-three/drei";
import characterFile from "../assets/Hoodie-Character.glb";
import { RigidBody } from "@react-three/rapier";

const Character = ({left, setLeft, right, setRight, forward, setForward, jump, setJump}) => {
    const charRef = useRef()
    console.log(charRef)


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
  
  useFrame((state, delta) => {
    const x = charRef.current?.translation().x
    console.log(x)
    if(x <= -4){
        charRef.current?.applyImpulse({x:30*delta, y: 0, z: 0})
    }
    if(x >= 4){
        charRef.current?.applyImpulse({x:-30*delta, y: 0, z: 0})
    }
    if(forward){
        charRef.current?.applyImpulse({x:0, y: 0, z: forward*delta})
    }
    if (left){
        charRef.current?.applyImpulse({x:left*delta, y:0, z:0}, true)
    }
    if(right){
        charRef.current?.applyImpulse({x:right*delta, y:0, z:0}, true)
    }
    if(jump){
        charRef.current?.applyImpulse({x:0, y:jump*delta, z:0}, true)
    }
})



useEffect(() => {
    charRef.current.restrictRotations(true)
    const handleKeyDown = (event) => {
        if (event.code === "ArrowLeft"){
            setLeft(-20)
        }
        else if (event.code === "ArrowRight"){
            setRight(20)
        }
        else if (event.code === "Space"){
            setJump(30)
        }
    }
    const handleKeyUp = (event) => {
        if (event.code === "ArrowLeft"){
            setLeft(0)
        }
        else if (event.code === "ArrowRight"){
            setRight(0)
        }
        else if (event.code === "Space"){
            setJump(0)
        }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
    window.removeEventListener("keydown",handleKeyDown);
    window.removeEventListener("keyup",handleKeyUp);
    }
}, [])

 
  return (
    <RigidBody ref={charRef} args={[0.1, 0.1, 0.1]}>
      <Box>
        <primitive
          object={model.scene}
          scale={1.2}
          position={[0, 1.2, 0]}
          rotation={[0, -3.14, 0]}
        />
      </Box>
    </RigidBody>
  );
};

export default Character;
