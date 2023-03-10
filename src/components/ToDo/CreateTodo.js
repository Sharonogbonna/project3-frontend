import { useNavigate } from "react-router-dom"
import { createTodo } from "../../services/todos-api"
import { useState } from "react"

export default function CreateTodo() {
    const nav = useNavigate()
    const [createButton, setCreateButton] = useState(false)
    const createTheTodo = (e) => {
        e.preventDefault()
        const todo = {title: e.target.title.value, description: e.target.description.value, 
        complete: false, due: e.target.due.value, created: Date.now()}
        createTodo(todo).then(() => nav('/todos'))
    }
    const closeMenu = () => {
        setCreateButton(false);
      };

return(
    <div id="form">
        <form onSubmit={createTheTodo} className="todo-form">
        <h4 className="form-title" id="todo-form-title">Create a To Do</h4>
            Title: <input type='text' name="title" placeholder="title"/> <br/>
            Due Date: <input type="date" name="due"/><br/>
            Details: <textarea type='text' name='description' placeholder="description" id='dsc'/><br/>
            <input type='submit' name="submit" onClick={closeMenu}/>
        </form>
    </div>
)
}