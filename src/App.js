import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Path from "./components/path";
// import RandomBoxes from "./components/random-boxes";
import Ground from "./components/ground";
import RandomTrees from "./components/randomised-trees";
import Lights from "./components/lights";
import Character from "./components/Character";
import ObstacleRunner from "./components/ObstacleRunner";
import Rock from "./components/Rock";
import Branch from "./components/Branch";

function App() {
  const pathLength = 1000;

  return (
    <div
      className="canvas-container"
      camera={{ position: [10, 10, 10], fov: 50 }}
    >
      <Canvas style={{ backgroundColor: "blue" }} shadows>
        <OrbitControls />
        <Lights />
        <RandomTrees />
        <Character />
        <ObstacleRunner />
        <Rock />
        <Branch />
        <Path pathLength={pathLength} />
        <Ground />
      </Canvas>
    </div>
  );
}

export default App;
