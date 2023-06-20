import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { Physics } from "@react-three/rapier";

import RandomisedObstacles from "./components/Randomised-obstacles";
import RandomisedGrassComponents from "./components/Randomised-trees";
import Path from "./components/Path";
import Ground from "./components/Ground";
import Lights from "./components/Lights";
import Character from "./components/Character";
import Rock from "./components/Rock";
import Branch from "./components/Branch";
import StepCounter from "./components/StepCounter";
import Tree from "./components/Tree";
import Motivation from "./components/Motivation";
import SideWalls from "./components/SideWalls";
import RightWall from "./components/RightWall";
import { Page } from "./components/Loading-Page";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Sky, Stats } from "@react-three/drei";
import Shop from "./components/Shop";
import Kebab from "./components/Kebab";

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [forward, setForward] = useState(0);
  const [jump, setJump] = useState(0);
  const [motivation, setMotivation] = useState(3);
  const [showGameOver, setShowGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const planeDimensions = {
    pathLength: 8000,
    pathWidth: 10,
    groundWidth: 30,
    groundLength: 1000,
  };

  useEffect(() => {
    const handleKeyPress = () => {
      setGameStarted(true);
      setForward(-20);
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="canvas-container">
      <Page gameStarted={gameStarted} />
      <StepCounter
        gameStarted={gameStarted}
        win={win}
        motivation={motivation}
        score={score}
        setScore={setScore}
      />
      <Motivation
        motivation={motivation}
        setShowGameOver={setShowGameOver}
        showGameOver={showGameOver}
        win={win}
      />
      <Canvas shadows>
        <Suspense>
          <Physics>
            <Environment preset="dawn" />
            <Lights />
            <Sky
              turbidity={10}
              rayleigh={2.5}
              mieCofficient={0.005}
              mieDirectionalG={0.7}
              azimuth={180}
              exposure={1}
              elevation={0}
              sunPosition={[0, 0.5, -10000]}
              distance={450000}
            />
            <Environment preset="dawn" />
            <PerspectiveCamera position={[0, 4, 7]}>
              <Character
                jump={jump}
                setJump={setJump}
                left={left}
                setLeft={setLeft}
                right={right}
                setRight={setRight}
                forward={forward}
                setForward={setForward}
                motivation={motivation}
                setMotivation={setMotivation}
                setShowGameOver={setShowGameOver}
                setWin={setWin}
              />
            </PerspectiveCamera>

            <RandomisedGrassComponents
              planeDimensions={planeDimensions}
              Component={Tree}
              objectSize={1.2}
              numObjects={200}
              buffer={10}
            />

            <RandomisedObstacles
              planeDimensions={planeDimensions}
              Component={Rock}
              objectSize={3}
              numObjects={50}
            />
            <RandomisedObstacles
              planeDimensions={planeDimensions}
              Component={Branch}
              objectSize={0.5}
              numObjects={50}
            />
            <Path planeDimensions={planeDimensions} />
            <Shop />
            <Kebab />
            <SideWalls planeDimensions={planeDimensions} />
            <RightWall planeDimensions={planeDimensions} />
            <RightWall planeDimensions={planeDimensions} />
            <Ground planeDimensions={planeDimensions} />
          </Physics>
          <Stats />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
