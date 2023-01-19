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
    deleteTodo(id)
    nav('/todos')
  }
  return (
    <div>
      <h2>{todo.title}</h2>
      <h3>description:{todo.description}</h3>
      <h4>Completed: {`${todo.complete ? 'Done!' : 'No'}`}</h4>
      <button onClick={() => {nav(`/edit-this-todo/${id}/edit`)}}>Edit</button>
      <button onClick={deleteTheTodo}>Delete</button>
      <button onClick={() => {nav('/todos')}}>Main</button>
    </div>
  );
}
export default Todo;
