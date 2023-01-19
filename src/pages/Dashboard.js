import './../css/dashboard.css'
import ToDoList from "../components/ToDo/ListOfTodos"

function Dashboard() {
    return(
        <div className='container'>
            <div className='todo-container'>
            <ToDoList/>
            </div>
        </div>
    )
}

export default Dashboard