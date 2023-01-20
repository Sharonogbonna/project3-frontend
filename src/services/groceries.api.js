//all our end points
import axios from 'axios'

const baseURL = 'https://byathread-api.onrender.com/groceries'

//show all
export const getGroceries = () => {
    const URL = baseURL
    //using axios get functionality to get our todos
    const response = axios.get(URL)
    return response
}
//show one
export const getGrocery = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
//edit the todo
export const editGrocery = (id, updatedGrocery) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedGrocery)
    return response
}
//create todo
export const createGrocery = (grocery) => {
    const URL = baseURL
    const response = axios.post(URL, grocery)
    return response
}
//delete the todo
export const deleteGrocery = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}