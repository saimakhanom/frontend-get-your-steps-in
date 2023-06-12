import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Path from "./components/path";
// import RandomBoxes from "./components/random-boxes";
import Ground from "./components/ground";
import RandomTrees from "./components/randomised-trees";

function App() {
  const pathLength = 1000;
  

  return (
    <div className="canvas-container">
      <Canvas style={{ backgroundColor: "blue" }} colorManagement
      shadows
      camera={{ position: [-3, 2, 5], fov: 90 }}>
        <OrbitControls />
        <ambientLight />
        <pointLight
          castShadow
          position={[0, 2, 2]}
          intensity={1}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <RandomTrees />
        {/* <Path pathLength={pathLength} /> */}
        <Ground />
      </Canvas>
    </div>
  );
}

export default App;
