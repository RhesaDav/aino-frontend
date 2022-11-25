import axios from "axios"

const url = 'http://localhost:8080/api/user'

export default axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"
    }
})