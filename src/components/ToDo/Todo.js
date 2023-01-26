import React from "react";
import { useState, useEffect } from "react";
import { deleteTodo, getTodo } from "../../services/todos-api";
import { useParams, useNavigate } from "react-router-dom";
function Todo() {
    //setting up the return to main page
    const nav = useNavigate()
  //desturturing the id parameter for use. this is a method and must have pramerters
  const { id } = useParams();
  //setting up our state
  const [todo, setTodo] = useState({})
  useEffect(() => {
    //getting the one ToDo from the API
    getTodo(id).then((res) => setTodo(res.data));
  });

  const deleteTheTodo = () => {
    deleteTodo(id).then(() => nav('/todos'))
  }
  return (
    <div className="todo-card">
      <h2 className="this-todo-title">{todo.title}</h2>
      <h6 className="created">Created on {new Date(todo.created).toString()}</h6>
       <div className="todo-details">
       {todo.due ? <h3 className="todo-due">Due on {new Date(todo.due).toDateString()}</h3>: <h3 className="todo-due">No Due Date</h3>}
      <h4>Description:</h4>
      <p>{todo.description}</p>
      <h4>Completed: {`${todo.complete ? 'Done!' : 'No'}`}</h4>
       </div>
      <button onClick={() => {nav(`/edit-this-todo/${id}/edit`)}}>Edit</button>
      <button onClick={deleteTheTodo}>Delete</button>
      <button onClick={() => {nav('/todos')}}>Main</button>
    </div>
  );
}
export default Todo;
