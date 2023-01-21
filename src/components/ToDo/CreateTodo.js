import { useNavigate } from "react-router-dom"
import { createTodo } from "../../services/todos-api"

export default function CreateTodo() {
    const nav = useNavigate()

    const createTheTodo = (e) => {
        const todo = {title: e.target.title.value, description: e.target.description.value, 
        complete: false, due: e.target.due.value, created: Date.now()}
        createTodo(todo)
        nav('/todos')
    }

return(
    <div>
        
        <form onSubmit={createTheTodo} className="todo-form">
        <h4>Create a Todo</h4>
            Title: <input type='text' name="title" placeholder="title"/> <br/>
            Due Date: <input type="date" name="due"/><br/>
            Details: <textarea type='text' name='description' placeholder="description" id='dsc'/><br/>
            <input type='submit'/>
        </form>
    </div>
)
}