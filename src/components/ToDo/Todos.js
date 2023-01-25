import { useState, useEffect } from "react";
import { getTodos } from "../../services/todos-api";
import CreateTodo from "./CreateTodo";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Todos() {
  //state to hold data
  const [toDoList, setToDoList] = useState([]);
  const [display, setDisplay] = useState(false);
  const [createButton, setCreateButton] = useState(false)

  useEffect(() => {
    getTodos()
      .then((res) => setToDoList(res.data));
  }, []);

  const showDisplay = () => {
    setDisplay(true);
  };
  const hideDisplay = () => {
    setDisplay(false);
  };
  const handleToggle = () => {
    setCreateButton((prev) => !prev)
  }
  return (
    <div className="all-of-todos-page">
      <div className="create-button">
      <button onClick={handleToggle}>
        {createButton ? (
          <HiMinus style={{ color: "#1da5be", width: "25px", height: "25px" }} />
        ) : (
          <AiOutlinePlus
            style={{ color: "#1da5be", width: "25px", height: "25px" }}
          />
        )}
      </button>
      </div>
      <h1 className="title" id="my-todo-list">My To Do List</h1>
      <div className={createButton ? "" : "hidden"}>
        <CreateTodo/>
      </div>
      <div className="todos">
      <p onClick={showDisplay} className={`description-btn ${display ? " hidden" : " active"}`}>
        click to show descriptions
      </p>
      <p onClick={hideDisplay} className={`description-btn ${display ? " active" : " hidden"}`}>
        click to hide descriptions
      </p>
      <ul>
        {toDoList.map((todo) => {
          return (
            <div>
              <li>
              <Link to={`/this-todo/${todo._id}`}>
                  <h3 className={`todos-titles ${todo.complete ? " completed" : ""}`}>
                    {todo.title}
                  </h3>
                </Link>
                <div className="todo-description">
                  {todo.due ? (
                    <strong>
                      <h6 className="due-date">
                        Due {new Date(todo.due).toDateString()}
                      </h6>
                    </strong>
                  ) : (
                    <h6 className="due-date">No due date</h6>
                  )}
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
      
    </div>
  );
}
