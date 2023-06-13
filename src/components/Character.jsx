import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PerspectiveCamera, useAnimations } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import runnerFile from "../assets/Hoodie-Character.glb";
import { Box } from "@react-three/drei";
import { RigidBody, interactionGroups } from "@react-three/rapier";

// const MyCamera = () => {
//     <PerspectiveCamera
//     fov={75}
//     makeDefault={true}
//     position={[0, 4, 7]}
//     />
// }

const Character = ({
  left,
  setLeft,
  right,
  setRight,
  forward,
  setForward,
  jump,
  setJump,
  motivation,
  setMotivation,
}) => {
  const charRef = useRef();
  const cameraRef = useRef();
  // const [coolDown, setCoolDown] = useState(false);
  const [collidedBranches, setCollidedBranches] = useState([]);
  // let collidedBranches = [];
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

  const z = charRef.current?.translation().z;

  useFrame((state, delta) => {
    const y = charRef.current?.translation().y;
    const x = charRef.current?.translation().x;
    const z = charRef.current?.translation().z;
    state.camera.lookAt(0, 0, z - 5);
    state.camera.position.set(0, y + 5, z + 15);
    state.camera.updateProjectionMatrix();

    if (x <= -4) {
      charRef.current?.applyImpulse({ x: 30 * delta, y: 0, z: 0 });
    }
    if (x >= 4) {
      charRef.current?.applyImpulse({ x: -30 * delta, y: 0, z: 0 });
    }
    if (forward) {
      charRef.current?.applyImpulse({ x: 0, y: 0, z: forward * delta });
    }
    if (left) {
      charRef.current?.applyImpulse({ x: left * delta, y: 0, z: 0 }, true);
    }
    if (right) {
      charRef.current?.applyImpulse({ x: right * delta, y: 0, z: 0 }, true);
    }
    if (jump) {
      charRef.current?.applyImpulse({ x: 0, y: jump * delta, z: 0 }, true);
    }
  });

  useEffect(() => {
    charRef.current.restrictRotations(true);
    const handleKeyDown = (event) => {
      if (event.code === "ArrowLeft") {
        setLeft(-5);
      } else if (event.code === "ArrowRight") {
        setRight(5);
      } else if (event.code === "Space") {
        setJump(30);
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
  }, []);

  const handleCollisionEnter = (event) => {
    // console.log(event.other.rigidBodyObject.id)
    if (
      !collidedBranches.includes(event.other.rigidBodyObject.id) &&
      event.other.rigidBodyObject.name === "branch"
    ) {
      setCollidedBranches([
        ...collidedBranches,
        event.other.rigidBodyObject.id,
      ]);
      setMotivation((prev) => prev - 1);
      // console.log("hit") 
    }
    console.log(collidedBranches);
    // // console.log(event.other.rigidBodyObject);
    // if (!coolDown && event.other.rigidBodyObject.name === "branch") {
    //   coolDown = true
    //   // setCoolDown(true);
    //   setMotivation((prev) => prev - 1);
    // } else {
    // }
  };

  return (
    <>
      <RigidBody
        ref={charRef}
        name="character"
        onCollisionEnter={(event) => {
          handleCollisionEnter(event);
        }}
        collisionGroups={interactionGroups(0, [1])}
      >
        <primitive
          object={model.scene}
          scale={1.2}
          position={[0, 1.2, 4]}
          rotation={[0, -3.14, 0]}
        />
      </RigidBody>
    </>
  );
};

export default Character;
