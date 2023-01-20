//all our end points
import axios from 'axios'

const baseURL = 'http://localhost:3001/wishlist'

//show all
export const getWishes = () => {
    const URL = baseURL
    //using axios get functionality to get our wishs
    const response = axios.get(URL)
    return response
}
//show one
export const getWish = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
//edit the wish
export const editWish = (id, updatedWish) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedWish)
    return response
}
//create wish
export const createWish = (wish) => {
    const URL = baseURL
    const response = axios.post(URL, wish)
    return response
}
//delete the wish
export const deleteWish = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}