import "./App.css";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/rapier";
import RandomisedObstacles from "./components/Randomised-obstacles";
import RandomisedGrassComponents from "./components/Randomised-trees";
import RandomisedGreenTreeComponent from "./components/Randomised-GreenTree";
import RandomisedSwingComponent from "./components/Randomised-swing";
import Path from "./components/Path";
import Ground from "./components/Ground";
import Lights from "./components/Lights";
import Grass from "./components/Grass";
import Character from "./components/Character";
import Rock from "./components/Rock";
import Branch from "./components/Branch";
import StepCounter from "./components/StepCounter";
import Tree from "./components/Tree";
import Motivation from "./components/Motivation";
import { Environment, PerspectiveCamera, Sky } from "@react-three/drei";
import SideWalls from "./components/SideWalls";
import RightWall from "./components/RightWall";
import { Page } from "./components/Loading-Page";
import { getAllScores, postScore } from "./utils/api-calls";
import GreenTree from "./components/GreenTree";
import Swing from "./components/Swing";

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [forward, setForward] = useState(-20);
  const [jump, setJump] = useState(0);
  const [motivation, setMotivation] = useState(3);
  const [showGameOver, setShowGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");

  const planeDimensions = {
    pathLength: 10000,
    pathWidth: 10,
    groundWidth: 300,
    groundLength: 1000,
  };

  return (
    <div className="canvas-container">
      {/* <label htmlFor="name" style={{ margin: "20px" }}>
        Your Name:
      </label>
      <input
        style={{ margin: "20px" }}
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => { postScore(name, score) }}>Axios POST</button>
      <button onClick={getAllScores}>Axios GET</button> */}
      <Page setForward={setForward} setScore={setScore} />
      <StepCounter motivation={motivation} score={score} setScore={setScore} />
      {/* <Motivation motivation={motivation} setShowGameOver={setShowGameOver} showGameOver={showGameOver}/> */}
      <Canvas shadows>
        <Suspense>
          <Physics>
            {/* <Lights /> */}
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
              />
            </PerspectiveCamera>

            {/* <RandomisedGrassComponents
              planeDimensions={planeDimensions}
              Component={Tree}
              objectSize={1.2}
              numObjects={200}
              buffer={10}
            /> */}
            <RandomisedGrassComponents
              planeDimensions={planeDimensions}
              Component={Grass}
              objectSize={3}
              numObjects={500}
              buffer={10}
            />
            <RandomisedGreenTreeComponent
              planeDimensions={planeDimensions}
              Component={GreenTree}
              objectSize={0.8}
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
            {/* <RandomisedObstacles
              planeDimensions={planeDimensions}
              Component={ObstacleRunner}
              objectSize={1.2}
              numObjects={3}
            /> */}
            <RandomisedSwingComponent
              planeDimensions={planeDimensions}
              Component={Swing}
              objectSize={3}
              numObjects={500}
              buffer={10}
            />
            <Path planeDimensions={planeDimensions} />
            <SideWalls planeDimensions={planeDimensions} />
            <RightWall planeDimensions={planeDimensions} />
            <RightWall planeDimensions={planeDimensions} />
            <Ground planeDimensions={planeDimensions} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
