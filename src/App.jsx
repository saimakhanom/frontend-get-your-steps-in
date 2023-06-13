import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Path from "./components/path";
// import RandomBoxes from "./components/random-boxes";
import Ground from "./components/ground";
import Lights from "./components/lights";
import Character from "./components/Character";
import RandomisedTrees from "./components/randomised-trees";
import RandomisedObstacles from "./components/randomised-obstacles";
import Rock from "./components/Rock";
import Branch from "./components/Branch";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

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
            <Rock />
            <Branch />
            {/* <RandomisedObstacles planeDimensions={planeDimensions} /> */}
            <Path planeDimensions={planeDimensions} />
            <Ground />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
