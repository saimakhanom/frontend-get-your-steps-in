import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import "./App.css";

function App() {
  return (
    <>
      <div className="canvas-container">
        <Canvas camera={{position: [10,10,10], fov: 50}}>
          <Scene/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
