import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import burgerFile from "../assets/Hamburger.glb"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { getAllScores, postScore, getLastSevenDays } from "../utils/api-calls";


// Spinner 
const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <h2>Loading Scores...</h2>
      <div className="spinner"></div>
    </div>
  )
}

const Scoreboard = ({score}) => {
  const [scorers, setScorers] = useState([])
  const [userInput, setUserInput] = useState("")
  const [disableForm, setDisableForm] = useState(false)
  const [isLoading, setIsloading] = useState(true)




  const navigate = useNavigate()
  const model = useLoader(GLTFLoader, burgerFile);
  
  const goHome = () => {
    navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setScorers(s => {
      const newArray = [...s, {name: userInput, score: score}]
      return newArray.sort((a,b) => {
        return b.score - a.score;
      })
    })
  

    if (userInput !== "") {
      postScore(userInput, score)
      .then(response => console.log(response))
      .catch(error => {
        if (error) {
        setScorers(s => {
          const arrayCopy = [...s]
          arrayCopy.pop()
          return arrayCopy;
        })

        }
      })
    }
    setUserInput("")
    setDisableForm(true)
  }

  const handleRadioChange = (e) => {
    
    // setSortMethod(e.target.value)
    if(e.target.value === "historic") {
      getAllScores()
      .then(data => {
        setScorers(data)
        
      })
      .catch(e => console.error(e))
  
    } else if (e.target.value === "lastWeek") {
      getLastSevenDays()
      .then(score => {
        setScorers(score)
        // setIsloading(false)
      })
      .catch(e => console.error(e) )
    }
  }

  
  useEffect(() => {
    getAllScores()
    .then(data => {
      setScorers(data)
      setIsloading(false)
    })
    .catch(e => console.error(e))
  }, [])


  // if (isLoading) {
  //   return <Spinner />
  // } else {


    return (
      <>
      {isLoading && <Spinner />}
       {!isLoading && (<div className="scoreboard-container">
        
        <h1>Scoreboard</h1>
        <h2 className="scoreboard-score">Your score is: {score}</h2>
        
        <div className="flex-wrapper">
          
          <form className="score-form" onSubmit={handleSubmit}>
            <label htmlFor="userScore">Join the hall of fame: </label>
            <input type="text" placeholder="Enter your name..." id="userScore" name="useInput" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
            <button type="submit" className="add-score" disabled={disableForm}>Join</button>
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

           
              <div className="radioButtons" onChange={handleRadioChange}>
                <span>
                  <input type="radio" id="historic" name="sort_type" value="historic"/>
                  <label htmlFor="historic">Historic</label>
                </span>
                <span>
                  <input type="radio" id="lastWeek" name="sort_type" value="lastWeek"/>
                  <label htmlFor="lastWeek">Last Week</label>
                </span>
              </div>

           
            <div className="board-header">
              <span>Name</span>
              <span>Steps</span>
            </div>
            {scorers.length > 0 && scorers.map(score => {
      
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
      
      </div> )}
      </>
    );
  

}
 
export default Scoreboard;