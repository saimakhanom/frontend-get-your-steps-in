import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Scoreboard from "./components/Scoreboard";


const myRouter = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/">
      <Route index element={<App />} />
      <Route path="/scoreboard" element={<Scoreboard />}/> 
    </Route>
))


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={myRouter} />);