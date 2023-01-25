import { Link } from "react-router-dom"
///css
import "../style.css";
//nav
import Nav from "./NavBar";
//containers
import GroceryList from "./Groceries/ListOfGroceries";
import ToDoList from "./ToDo/ListOfTodos";
import AppList from "./Applications/ListOfApplications";
import LogList from "./BookLog/ListOfLogs";
import TBRList from "./ToBe/ListOfToBes";
import WishList from "./Wishlist/ListOfWishes";
import ListOfNav from "./ListOfNav";
import CreateNavBar from "./CreateNavBar";

function Dashboard() {
  return (
    <div className="dashboard">
      <CreateNavBar/>
      <h1 className="title">By a Thread</h1>
      <div className="container">
        <div className="dash-nav">
          <ListOfNav/>
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
        <div className="app-container">
          <Link to="/apptracker">
            <h3>Applications:</h3>
          </Link>
          <AppList />
        </div>
        <div className="log-container">
          <Link to="/booklog">
            <h3>Recent Reads:</h3>
          </Link>
          <LogList />
        </div>
        <div className="wishlist-container">
          <Link to="/wishlist">
            <h3>Wishlist:</h3>
          </Link>
          <WishList />
        </div>
        <div className="tbr-container">
          <Link to="/tbr-w">
            <h3>Bored?</h3>
          </Link>
          <TBRList/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
