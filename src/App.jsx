import './App.css'
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Physics } from "@react-three/rapier";
import RandomisedObstacles from "./components/Randomised-obstacles";
import RandomisedGrassComponents from "./components/Randomised-trees";
import Path from "./components/Path";
import Ground from "./components/Ground";
import Lights from "./components/Lights";
import Grass from "./components/Grass";
import Character from "./components/Character";
import Rock from "./components/Rock";
import Branch from "./components/Branch";
import StepCounter from "./components/StepCounter";
// import ObstacleRunner from "./components/ObstacleRunner";
import Tree from "./components/Tree";
import Motivation from "./components/Motivation";
import { Environment, OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import SideWalls from "./components/SideWalls";
import RightWall from "./components/RightWall";
import { Page } from './components/Loading-Page';

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [forward, setForward] = useState(-20);
  const [jump, setJump] = useState(0);
  const [motivation, setMotivation] = useState(3);
  

  const planeDimensions = {
    pathLength: 10000,
    pathWidth: 10,
    groundWidth: 300,
    groundLength: 1000,
  };


  

  return (
    <div className="canvas-container">
      <Page setForward={setForward}/>
      <StepCounter motivation={motivation} />
      <Motivation motivation={motivation} />
      <Canvas shadows>
        <Suspense>
          <Physics>
            {/* <Lights /> */}
            <Sky turbidity={10} rayleigh={2.5} mieCofficient={0.005} mieDirectionalG={0.7} azimuth={180} exposure={1} elevation={0} sunPosition={[0,0.5,-10000]} distance={450000}/>
            <Environment preset="dawn"/>
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
              />
            </PerspectiveCamera>

            <RandomisedGrassComponents
              planeDimensions={planeDimensions}
              Component={Tree}
              objectSize={1.2}
              numObjects={200}
              buffer={10}
            />
            <RandomisedGrassComponents
              planeDimensions={planeDimensions}
              Component={Grass}
              objectSize={5}
              numObjects={500}
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

            <Path planeDimensions={planeDimensions} />
            <SideWalls planeDimensions={planeDimensions} />
            <RightWall planeDimensions={planeDimensions}/>
            <Ground planeDimensions={planeDimensions} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
