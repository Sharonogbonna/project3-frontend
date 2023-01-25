import { useNavigate, useParams } from "react-router"
import { createTodo, editTodo } from "../../services/todos-api"

export default function Form({ props }){
    console.log(props)
    const {id} = useParams()
    const nav = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const todo = {
            title: e.target.title.value, 
            description: e.target.description.value,
            complete: e.target.complete.checked,
            due: e.target.due.value,
            created: Date.now()
        }
        if(props._id){
            editTodo(props._id, todo)
            nav(`/this-todo/${id}`)
        }else{
            createTodo(todo)
            nav('/todos')
        }
        
    }
    return(
        //fix this to have ternary operator for submit button
        <form className="todo-form" id="form" onSubmit={handleSubmit}>
            <h3 className="form-title" id="todo-form-title">Edit This To Do</h3>
            Title: <input type='text' name="title" placeholder="title" defaultValue={props.title}/> <br/>
            Due Date:{props.due ? <p>(current due date is {new Date(props.due).toDateString()})</p> : <p></p>} <input type="date" name="due" /> <br/>
            Details: <textarea type="text" name="description" placeholder="description" defaultValue={props.description}/>
            Complete?<input type='checkbox' name="complete" defaultChecked={props.complete}/>
            <input type='submit' name="submit" value='Edit To Do'/>
        </form>
    )
}