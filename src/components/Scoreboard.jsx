import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import burgerFile from "../assets/Hamburger.glb"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


// mock data
const highScorers = [
  {
    name: "Nadia",
    score: 23456
  },
  {
    name: "Dave",
    score: 12456
  },
  {
    name: "Joel",
    score: 11942
  },
  {
    name: "Saima",
    score: 10456
  },
  {
    name: "Jorge",
    score: 16
  }
]

const Scoreboard = () => {
  const [scorers, setScorers] = useState(highScorers)
  const navigate = useNavigate()

  const model = useLoader(GLTFLoader, burgerFile);
  

  const goHome = () => {
    navigate("/")
  }

  return (
    <div className="scoreboard-container">
      
      <h1>Scoreboard</h1>
      
      <div className="flex-wrapper">
        
        <form className="score-form">
          <label htmlFor="userScore">Join the hall of fame: </label>
          <input type="text" placeholder="Enter your name..." id="userScore"/>
          <button className="add-score">Join</button>
        </form>

        <div className="burger-canvas-container">
        <Canvas className="burger-canvas">
        <OrbitControls />
        <ambientLight intensity={1}/>
          <primitive
            object={model.scene}
            scale={0.27}
            position={[0, -1, 0]}
            rotation={[-0.1, 0, 0]}
          />
          </Canvas>
      </div>
        
        <div className="board">
          <div className="board-header">
            <span>Name</span>
            <span>Steps</span>
          </div>
          {scorers.map(score => {
            return (
              <div key={crypto.randomUUID()} className="score-item">
                <span>{score.name}</span>
                <span>{score.score}</span>
              </div>
            )
          })}
        </div>
      </div>

      <button className="playagain-btn" onClick={goHome}>Play again</button>
    
    </div>
  );
}
 
export default Scoreboard;