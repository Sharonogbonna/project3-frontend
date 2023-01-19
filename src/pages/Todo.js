import { Route, Routes } from "react-router-dom";
import { EditTodo } from "../components/ToDo/EditTodo";
import Todo from "../components/ToDo/Todo";
import Todos from "../components/ToDo/Todos";

//css
import './../css/todos.css'
//components
function TodoPage() {
  return (
    <div className="App">
      <h1>My To Do List</h1>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todos/:id" element={<Todo/>} />
        <Route path ="/todos/:id/edit" element={<EditTodo/>}/>
      </Routes>
    </div>
  );
}

export default TodoPage;
