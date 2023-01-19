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
            complete: e.target.complete.checked
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
        <form onSubmit={handleSubmit}>
            <h3>Add Item To Do</h3>
            <input type='text' name="title" placeholder="title" defaultValue={props.title}/> <br/>
            <textarea type="text" name="description" placeholder="description" defaultValue={props.description}/>
            <input type='checkbox' name="complete" defaultChecked={props.complete}/>
            <input type='submit' value='Edit To Do'/>
        </form>
    )
}