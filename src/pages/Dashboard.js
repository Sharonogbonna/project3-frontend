import Nav from "../components/NavBar";
import ToDoList from "../components/ToDo/ListOfTodos";
import '../style.css'

function Dashboard() {
  return (
    <div>
      <div className="container">
        <h1>By a Thread</h1>
        <div className="dash-nav">
          <Nav />
        </div>
        <div className="todo-container">
          <h3>To Do:</h3>
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
