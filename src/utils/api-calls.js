import axios from "axios"
const api = axios.create({
    baseURL: "http://localhost:9090/api",
});
  

export const getAllScores = () => {
    return api.get("/leaderboard").then((res) => {
        console.log(res.data.scores)
    })
}