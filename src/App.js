import { OrbitControls,  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Path from "./components/path";
// import RandomBoxes from "./components/random-boxes";
import Ground from "./components/ground";
import RandomTrees from "./components/randomised-trees";

import Lights from "./components/lights";

function App() {
  const pathLength = 1000;
 

  return (
    <div className="canvas-container">
      <Canvas style={{ backgroundColor: "blue" }}
      shadows>
        <OrbitControls />
       <Lights/>
        <RandomTrees />
        <Path pathLength={pathLength} />
        <Ground />
      </Canvas>
    </div>
  );
}

export default App;
