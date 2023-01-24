//all our end points
import axios from 'axios'

// const baseURL = 'http://localhost:3001/applications'
let baseURL = ""

if (process.env.NODE_ENV === 'production') {
    baseURL = `https://byathread-api.onrender.com` + "/applications/"
}
else {
    baseURL = 'http://localhost:3001' + "/applications/"
}
//show all
export const getApplications = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}
//show one
export const getApp = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
//edit the todo
export const editApp = (id, updatedApp) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedApp)
    return response
}
//create todo
export const createApp = (app) => {
    const URL = baseURL
    const response = axios.post(URL, app)
    return response
}
//delete the todo
export const deleteApp = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}