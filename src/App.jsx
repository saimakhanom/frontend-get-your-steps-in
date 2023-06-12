import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Path from "./components/path";
// import RandomBoxes from "./components/random-boxes";
import Ground from "./components/ground";
import Lights from "./components/lights";
import Character from "./components/Character";
import RandomisedTrees from "./components/randomised-trees";
import RandomisedObstacles from "./components/randomised-obstacles";

function App() {

  const pathDimensions = {
    pathLength: 1000,
    pathWidth: 10
  }


  return (
    <div className="canvas-container">
      <Canvas
        style={{ backgroundColor: "blue" }}
        camera={{ position: [0, 2.5, 5]}}
        shadows
      >
        <OrbitControls />
        <Lights />
        <RandomisedTrees pathDimensions={pathDimensions} />
        <Character />
        <RandomisedObstacles pathDimensions={pathDimensions} />
        <Path pathDimensions={pathDimensions} />
        <Ground />
      </Canvas>
    </div>
  );
}

export default App;
