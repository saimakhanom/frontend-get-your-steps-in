import axios from "axios"
const api = axios.create({
    baseURL: "http://localhost:9090/api",
});
  

export const getAllScores = () => {
    return api.get("/leaderboard").then((res) => {
        console.log(res.data.scores)
        return res.data.scores
    })
}

export const postScore = (name, score) => {
    return api.post("/leaderboard", {name, score}).then((res) => {
        console.log(res.data.acknowledgement )
       return res.data.acknowledgement 
    })
}