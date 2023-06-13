import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import RandomisedTrees from "./components/Randomised-trees";
import RandomisedObstacles from "./components/Randomised-obstacles";
import Path from "./components/Path";
// import RandomBoxes from "./components/random-boxes";
import Ground from "./components/Ground";
import Lights from "./components/Lights";
import Character from "./components/Character";
import Rock from "./components/Rock";
import Branch from "./components/Branch";
import ObstacleRunner from "./components/ObstacleRunner"

function App() {
  const planeDimensions = {
    pathLength: 1000,
    pathWidth: 10,
    groundWidth: 1000,
    groundLength: 1000,
  };

  return (
    <div className="canvas-container">
      <Canvas
        style={{ backgroundColor: "blue" }}
        camera={{ position: [0, 4, 7] }}
        shadows
      >
        <Suspense>
          <Physics>
            <OrbitControls />
            <Lights />
            <RandomisedTrees planeDimensions={planeDimensions} />
            <Character />
            <RandomisedObstacles planeDimensions={planeDimensions} Component={Rock} objectSize={5} numObjects={10} />
            <RandomisedObstacles planeDimensions={planeDimensions} Component={Branch} objectSize={0.5} numObjects={10} />
            <RandomisedObstacles planeDimensions={planeDimensions} Component={ObstacleRunner} objectSize={1} numObjects={3} />
            <Path planeDimensions={planeDimensions} />
            <Ground />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

// planeDimensions,
// Component,
// objectSize = 1,
// numObjects = 10,