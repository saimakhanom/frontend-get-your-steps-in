import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Path from "./components/path";
import RandomBoxes from "./components/random-boxes";
import Ground from "./components/ground";

function App() {
  const pathLength = 1000;

  return (
    <div className="canvas-container">
      <Canvas style={{ backgroundColor: "blue" }}>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {/* <Ball /> */}
        <Path pathLength={pathLength} />
        {/* <RandomBoxes pathLength={pathLength} /> */}
        <Ground />
      </Canvas>
    </div>
  );
}

export default App;
