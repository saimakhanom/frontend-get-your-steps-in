import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import App from "./App";
import soundFile from "./assets/sound.mp3"


const WholeApp = () => {
  const [score, setScore] = useState(0)
  const sound = new Audio(soundFile)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App sound={sound} score={score} setScore={setScore}/>} />
        <Route path="/scoreboard" element={<Scoreboard sound={sound} score={score} />}/> 
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WholeApp />);