import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useAnimations } from "@react-three/drei";
import { useEffect, useRef, useMemo, useState } from "react";
import runnerFile from "../assets/Hoodie-Character.glb";
import {
  RigidBody,
  interactionGroups,
  CuboidCollider,
} from "@react-three/rapier";

const Character = ({
  left,
  setLeft,
  right,
  setRight,
  forward,
  jump,
  setJump,
  setMotivation,
}) => {
  const [allowJump, setAllowJump] = useState(true);
  const charRef = useRef();

  let collidedObjects = useMemo(() => {
    return [];
  }, []);

  const model = useLoader(GLTFLoader, runnerFile);
  const modelAnimations = useAnimations(model.animations, model.scene);
  const charRunning = "CharacterArmature|Run";

  useEffect(() => {
    const action = modelAnimations.actions[charRunning];
    action.reset().fadeIn(0.5).play();
    return () => {
      action.fadeOut(0.5);
    };
  }, [modelAnimations.actions, charRunning]);

  useFrame((state, delta) => {
    const y = charRef.current?.translation().y;
    const x = charRef.current?.translation().x;
    const z = charRef.current?.translation().z;
    const velocity = charRef.current?.linvel();
    state.camera.position.set(0, y + 5, z + 15);
    state.camera.updateProjectionMatrix();

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
  });
  
  useEffect(() => {
    charRef.current.setEnabledRotations(false, false, false);

    const handleKeyDown = (event) => {
      if (event.code === "ArrowLeft") {
        setLeft(-5);
      } else if (event.code === "ArrowRight") {
        setRight(5);
      } else if (event.code === "Space" && !event.repeat && allowJump) {
        setJump(8);
        setAllowJump(false);
        setTimeout(() => {
          setAllowJump(true);
        }, 500);
      } else if (event.code === "Space" && event.repeat) {
        setJump(-8);
      }
    };
    const handleKeyUp = (event) => {
      if (event.code === "ArrowLeft") {
        setLeft(0);
      } else if (event.code === "ArrowRight") {
        setRight(0);
      } else if (event.code === "Space") {
        setJump(0);
        
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [left, right, jump, allowJump]);

  const handleCollisionEnter = (event) => {
    if (
      !collidedObjects.includes(event.other.rigidBodyObject.id) &&
      collidedObjects.length < 3 &&
      (event.other.rigidBodyObject.name === "branch" ||
        event.other.rigidBodyObject.name === "obstacleRunner" ||
        event.other.rigidBodyObject.name === "rock")
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
        gravityScale={1.6}
        colliders={false}
        onCollisionEnter={(event) => {
          handleCollisionEnter(event);
        }}
        collisionGroups={interactionGroups(0, [1])}
      >
        <CuboidCollider args={[0.35, 0.35, 0.35]} position={[0, 3, 4]} />

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
