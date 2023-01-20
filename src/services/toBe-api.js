//all our end points
import axios from 'axios'

const baseURL = 'https://byathread-api.onrender.com/tobes'

//show all
export const getToBes = () => {
    const URL = baseURL
    //using axios get functionality to get our tobes
    const response = axios.get(URL)
    return response
}
//show one
export const getToBe = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
//edit the tobe
export const editToBe = (id, updatedToBe) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedToBe)
    return response
}
//create tobe
export const createToBe = (tobe) => {
    const URL = baseURL
    const response = axios.post(URL, tobe)
    return response
}
//delete the tobe
export const deleteToBe = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}