import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import RandomisedObstacles from "./components/Randomised-obstacles";
import RandomisedGrassComponents from "./components/Randomised-trees";
import Path from "./components/Path";
import Ground from "./components/Ground";
import Lights from "./components/Lights";
import Character from "./components/Character";
import Rock from "./components/Rock";
import Branch from "./components/Branch";
import StepCounter from "./components/StepCounter";
import ObstacleRunner from "./components/ObstacleRunner"
import Tree from "./components/Tree"

function App() {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [forward, setForward] = useState(-5)
  const [jump, setJump] = useState(0)

  const planeDimensions = {
    pathLength: 1000,
    pathWidth: 10,
    groundWidth: 1000,
    groundLength: 1000,
  };

  return (
    <div className="canvas-container">
      <StepCounter/>
      <Canvas
        style={{ backgroundColor: "blue" }}
        camera={{ position: [0, 4, 7] }}
        shadows
      >
        <Suspense>
          <Physics debug>
            <OrbitControls />
            {/* <PerspectiveCamera position={[0,4,7]}/> */}
            <Lights />
            <Character jump={jump} setJump={setJump} left={left} setLeft={setLeft} right={right} setRight={setRight} forward={forward} setForward={setForward}/>

            <RandomisedGrassComponents planeDimensions={planeDimensions} Component={Tree} objectSize={1.2} numObjects={20} buffer={10}/>

            <RandomisedObstacles planeDimensions={planeDimensions} Component={Rock} objectSize={5} numObjects={10} />
            <RandomisedObstacles planeDimensions={planeDimensions} Component={Branch} objectSize={0.5} numObjects={10} />
            <RandomisedObstacles planeDimensions={planeDimensions} Component={ObstacleRunner} objectSize={1.2} numObjects={3} />

            <Path planeDimensions={planeDimensions} />
            <Ground />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
