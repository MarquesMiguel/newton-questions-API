import axios from "axios"

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000'
})

async function getQuestion(id){
    const res = await api.get(`/questions/${id}`)
    return (res.data)
}

export { api, getQuestion } 