import { useState, useEffect } from "react";
import { getTodos } from "../../services/todos-api";
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
    <div className="toggle-description">
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
                  <h3 className={`todo-title ${todo.complete ? " completed" : ""}`}>
                    {todo.title}<input type='checkbox' defaultChecked={todo.complete}/>
                  </h3>
                <div>

                  <p className={` ${display ? "" : " hidden"}`}>
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
