import { type } from "@testing-library/user-event/dist/type";
import axios from "axios"
const api = axios.create({
    baseURL: "https://be-get-your-steps-in.onrender.com/api",
});
  

export const getAllScores = () => {
    return api.get("/leaderboard").then((res) => {
        // console.log(res.data.scores)
        return res.data.scores
    })
}

export const postScore = (name, score) => {
    return api.post("/leaderboard", {name: name, score: score}).then((res) => {
        // console.log(res.data.acknowledgement )
       return res.data.data
    })
}

export const getLastSevenDays = () => {
    return api.get("/leaderboard/sort").then((res) => {
        // console.log(res.data.scores)
        return res.data.scores
    })
}

