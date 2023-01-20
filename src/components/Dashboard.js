import { Link } from "react-router-dom"

import GroceryList from "./Groceries/ListOfGroceries";
import Nav from "./NavBar";
import ToDoList from "./ToDo/ListOfTodos";
import "../style.css";

function Dashboard() {
  return (
    <div>
      <h1>By a Thread</h1>
      <div className="container">
        <div className="dash-nav">
          <Nav />
        </div>
        <div className="todo-container">
          <Link to="/todos">
            <h3>To Do:</h3>
          </Link>
          <ToDoList />
        </div>
        <div className="grocery-container">
          <Link to="/grocerylist">
            <h3>Grocery List:</h3>
          </Link>
          <GroceryList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
