//all our end points
import axios from 'axios'

// const baseURL = 'http://localhost:3001/booklog'
let baseURL = ""

if (process.env.NODE_ENV === 'production') {
    baseURL = `https://byathread-api.onrender.com` + "/booklog/"
}
else {
    baseURL = 'http://localhost:3001' + "/booklog/"
}

//show all
export const getLogs = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}
//show one
export const getLog = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
//edit the todo
export const editLog = (id, updatedLog) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedLog)
    return response
}
//create todo
export const createLog = (log) => {
    const URL = baseURL
    const response = axios.post(URL,log)
    return response
}
//delete the todo
export const deleteLog = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}