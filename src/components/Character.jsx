import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useAnimations } from "@react-three/drei";
import { useEffect, useRef, useMemo, useState } from "react";
import runnerFile from "../assets/Hoodie-Character.glb";
import * as THREE from "three";

import {
  RigidBody,
} from "@react-three/rapier";
import { damp } from "maath/easing";

const Character = ({
  left,
  setLeft,
  right,
  setRight,
  forward,
  jump,
  setJump,
  motivation,
  setMotivation,
  setWin
}) => {
  const [allowJump, setAllowJump] = useState(true);
  const [jumpKeyPressed, setJumpKeyPressed] = useState(false);
  const charRef = useRef();

  let collidedObjects = useMemo(() => {
    return [];
  }, []);

  const model = useLoader(GLTFLoader, runnerFile);
  const modelAnimations = useAnimations(model.animations, model.scene);
  const charRunning = "CharacterArmature|Run";
  const charDeath = "CharacterArmature|Death";

  useEffect(() => {
    const runAction = modelAnimations.actions[charRunning];
    const deathAction = modelAnimations.actions[charDeath];
  
    if (motivation > 0) {
      runAction.fadeIn(0.5).play();
    } else {
      deathAction.timeScale = 0.5;
      deathAction.clampWhenFinished = true;
      deathAction.setLoop(THREE.LoopOnce);
      deathAction.play();
    }
    return () => {
      runAction.stop();
      deathAction.stop();
    };
  }, [motivation, modelAnimations, charRunning, charDeath]);


 

  useFrame((state, delta) => {
    const y = charRef.current?.translation().y;
    const x = charRef.current?.translation().x;
    const z = charRef.current?.translation().z;
    const velocity = charRef.current?.linvel();
    const target = state.camera.position.set(0, y+5, z+15)
    damp(state.camera.position,[0, y+5, z+15], 1, delta);
    state.camera.updateProjectionMatrix();
    if (z <= -4900){
      setWin(true)
      const runAction = modelAnimations.actions[charRunning];
      const deathAction = modelAnimations.actions[charDeath];
    
      charRef.current?.setLinvel({ x: 0, y: 0, z: 0 })
        runAction.stop();
  
    
    }
    if (forward && velocity?.z > -75) {
      charRef.current?.applyImpulse({
        x: 0,
        y: 0,
        z: forward * 0.5 * delta,
      });
    }
    if (left) {
      charRef.current?.applyImpulse({ x: left * delta, y: 0, z: 0 }, true);
    }
    if (right) {
      charRef.current?.applyImpulse({ x: right * delta, y: 0, z: 0 }, true);
    }
    if (jump) {
      charRef.current?.applyImpulse(
        { x: 0, y: 0 + jump * delta, z: 0 * delta },
        true
      );
    }
    if (y > -0.5) {
      charRef.current?.applyImpulse({ x: 0, y: 0 - jump * delta, z: 0 }, true);
    }
    if (motivation === 0) {
      charRef.current?.setLinvel({ x: 0, y: 0, z: 0 });
    }
  });

  useEffect(() => {
    charRef.current.setEnabledRotations(false, false, false);

    const handleKeyDown = async (event) => {
      if (event.code === "ArrowLeft" && jumpKeyPressed === false) {
        setLeft(-5);
      } else if (event.code === "ArrowRight" && jumpKeyPressed === false) {
        setRight(5);
      } else if (event.code === "Space" && !event.repeat && allowJump) {
        try {
          setJump(10);
          setTimeout(() => {
            setJump(0);
          }, 300);
        } catch (err) {
          console.log(err);
        }
      } else if (event.code === "Space" && event.repeat === true) {
        setJumpKeyPressed(true);
        setJump(-8);
        event.preventDefault();
      }
    };
    const handleKeyUp = (event) => {
      if (event.code === "ArrowLeft") {
        setLeft(0);
        charRef.current?.setLinvel({
          x: 0,
          y: 0,
          z: charRef.current?.linvel().z,
        });
      } else if (event.code === "ArrowRight") {
        setRight(0);
        charRef.current?.setLinvel({
          x: 0,
          y: 0,
          z: charRef.current?.linvel().z,
        });
      } else if (event.code === "Space") {
        setJumpKeyPressed(false);
        setJump(-8);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    left,
    right,
    jump,
    allowJump,
    jumpKeyPressed,
    setJump,
    setRight,
    setLeft,
  ]);

  const handleCollisionEnter = (event) => {
    if (event.other.rigidBodyObject.name === "branch" ||
    event.other.rigidBodyObject.name === "rock")
    if (
      !collidedObjects.includes(event.other.rigidBodyObject.id) &&
      collidedObjects.length < 3 &&
      (event.other.rigidBodyObject.name === "branch" ||
        event.other.rigidBodyObject.name === "rock")
      && motivation > 0 
    ) {
      collidedObjects.push(event.other.rigidBodyObject.id);
      setMotivation((prev) => prev - 1);
    }
  };

  return (
    <>
      <RigidBody
        ref={charRef}
        name="character"
        onCollisionEnter={(event) => {
          handleCollisionEnter(event);
        }}
      
      >

        <primitive
          object={model.scene}
          scale={1.2}
          position={[0, 2.8, 4]}
          rotation={[0, -3.14, 0]}
        />
      </RigidBody>
    </>
  );
};

export default Character;
