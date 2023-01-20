//all our end points
import axios from 'axios'

const baseURL = 'http://localhost:3001/todos'

//show all
export const getTodos = () => {
    const URL = baseURL
    //using axios get functionality to get our todos
    const response = axios.get(URL)
    return response
}
//show one
export const getTodo = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
//edit the todo
export const editTodo = (id, updatedTodo) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedTodo)
    return response
}
//create todo
export const createTodo = (todo) => {
    const URL = baseURL
    const response = axios.post(URL, todo)
    return response
}
//delete the todo
export const deleteTodo = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}