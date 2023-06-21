import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import App from "./App";

const WholeApp = () => {
  const [score, setScore] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App score={score} setScore={setScore}/>} />
        <Route path="/scoreboard" element={<Scoreboard score={score} />}/> 
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WholeApp />);