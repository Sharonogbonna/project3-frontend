import { useState, useEffect } from "react";
import { deleteTodo, getTodos } from "../../services/todos-api";
import CreateTodo from "./CreateTodo";

export default function Todos() {
  //state to hold data
  const [toDoList, setToDoList] = useState([]);
  const [display, setDisplay] = useState(false);
  
  useEffect(() => {
    getTodos()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setToDoList(res.data));
  }, []);

  const showDisplay = () => {
    setDisplay(true);
  };
  const hideDisplay = () => {
    setDisplay(false);
  };
  return (
    <div>
        <h1>My To Do List</h1>
      <CreateTodo />
      <p
                    onClick={showDisplay}
                    className={`${display ? "hidden" : "active"}`}
                  >
                    click to show descriptions
                  </p>
                  <p
                    onClick={hideDisplay}
                    className={`${display ? "active" : "hidden"}`}
                  >
                    click to hide descriptions
                  </p>
      <ul>
        {toDoList.map((todo) => {
          return (
            <div>
              <li>
                <a href={`/this-todo/${todo._id}`}>
                  <h3 className={`${todo.complete ? "completed" : ""}`}>
                    {todo.title}
                  </h3>
                </a>
                <div className="description">
                  {todo.due ? <strong><h6 className="due-date">Due {new Date(todo.due).toDateString()}</h6></strong> : <h6>No due date</h6>}
                  <p className={`${display ? "" : "hidden"}`}>
                    {todo.description}
                  </p>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
