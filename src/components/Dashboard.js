import GroceryList from "./Groceries/ListOfGroceries";
import Nav from "./NavBar";
import ToDoList from "./ToDo/ListOfTodos";
import '../style.css'

function Dashboard() {
  return (
    <div>
         <h1>By a Thread</h1>
      <div className="container">
        <div className="dash-nav">
          <Nav />
        </div>
        <div className="todo-container">
          <h3>To Do:</h3>
          <ToDoList />
        </div>
        <div className="grocery-container">
            <h3>Grocery List:</h3>
            <GroceryList/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
