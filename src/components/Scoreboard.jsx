import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { getAllScores, postScore, getLastSevenDays } from "../utils/api-calls";
import Kebab from "./Kebab";
import Spinner from "./Spinner";
import Header from "./Header";


const Scoreboard = ({score}) => {
  const [scorers, setScorers] = useState([])
  const [userInput, setUserInput] = useState("")
  const [disableForm, setDisableForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()
  
  const goHome = () => {
    
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setScorers(s => {
      const newArray = [...s, {name: userInput, score: score}]
     newArray.sort((a,b) => {
        return b.score - a.score;
     })
      return newArray.slice(0, 10)
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
    
    if(e.target.value === "historic") {
      getAllScores()
      .then(data => {
        setScorers(data.slice(0, 9))
        
      })
      .catch(e => console.error(e))
  
    } else if (e.target.value === "lastWeek") {
      getLastSevenDays()
      .then(score => {
        setScorers(score.slice(0, 9))
      })
      .catch(e => console.error(e) )
    }
  }

  
  useEffect(() => {
    getAllScores()
    .then(data => {
      setScorers(data.slice(0, 10))
      setIsLoading(false)
    })
    .catch(e => console.error(e))
  }, [])


    return (
      <>
      {isLoading && <Spinner />}
       {!isLoading && (
      <div className="scoreboard-container">
        <div className="grow">
          <Header/>
          
          <h1>Scoreboard</h1>
          <h2 className="scoreboard-score">Your score is: {score}</h2>
          
          <div className="flex-wrapper">
            <div className="score-form-wrapper">
              <form className="score-form" onSubmit={handleSubmit}>
                <label htmlFor="userScore">Join the hall of fame: </label>
                <input type="text" placeholder="Enter your name..." id="userScore" name="useInput" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
                <button type="submit" className="add-score" disabled={disableForm}>Join</button>
              </form>
              <button className="playagain-btn" onClick={goHome}>Play again</button>
            </div>


            <div className="burger-canvas-container">
              <Canvas className="burger-canvas">
                <OrbitControls />
                <ambientLight intensity={1}/>
                <Kebab scale={1} position={[0,0,0]} rotationSpeed={0.05}/>
              </Canvas>
            </div>
            

            <div className="board">
              <div className="radioButtons" onChange={handleRadioChange}>
                <span>
                  <input type="radio" id="historic" name="sort_type" value="historic" defaultChecked/>
                  <label htmlFor="historic">All Time</label>
                </span>
                <span>
                  <input type="radio" id="lastWeek" name="sort_type" value="lastWeek"/>
                  <label htmlFor="lastWeek">This Week</label>
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
            {/* end of board */}
          </div>
          {/* end of flex wrapper */}
          
          <div className="credits">
            <h3>Attributions: </h3>
            <br />
            <p className="credit-unit"><a className="credit-links" href="https://poly.pizza/m/uxSb2WTPU4" target="_blank"
                rel="noreferrer">Tree by Zsky [CC-BY] via Poly Pizza</a></p>
            <p className="credit-unit"><a className="credit-links" href="https://poly.pizza/m/mW2az70DsU" target="_blank"
                rel="noreferrer">Bench by Pixel [CC-BY] via Poly Pizza</a></p>
            <p className="credit-unit"><a className="credit-links" href="https://opengameart.org/users/vladimirp" target="_blank"
                rel="noreferrer">Grassby VladimirP</a></p>
            <p className="credit-unit"><a className="credit-links" href="https://poly.pizza/m/OQvi8PIZ40" target="_blank"
                rel="noreferrer">Rocks by Quaternius</a></p>
            <p className="credit-unit"><a className="credit-links" href="https://poly.pizza/m/L4E32Wee6C" target="_blank"
                rel="noreferrer">Wood Log by Quaternius</a></p>
            <p className="credit-unit"><a className="credit-links" href="https://poly.pizza/m/5qD-9AvW0eh" target="_blank"
                rel="noreferrer">Shop by Shaun Glowa [CC-BY] via Poly Pizza</a></p>
                <p className="credit-unit"><a className="credit-links" href="https://poly.pizza/m/47UYz6vLa_V" target="_blank"
                rel="noreferrer">Kebab by Poly by Google [CC-BY] via Poly Pizza</a></p>
                <p className="credit-unit"><a className="credit-links" href="https://poly.pizza/m/gKLBoRsyKe" target="_blank"
                rel="noreferrer">Hoodie Character by Quaternius</a></p>
            <p className="credit-unit"><a className="credit-links" href="https://www.youtube.com/watch?v=tQsKQZ3Nt6Q" >Music: PAWSA - Room Service (24 Hour Mix)</a></p>
          </div>


        </div>
      
      </div>)}
      </>
    );
}
 
export default Scoreboard;
