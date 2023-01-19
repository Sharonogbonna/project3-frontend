import { Route, Routes } from "react-router-dom";
//css
// import './default.css'
import './style.css'
//pages
import Dashboard from "./pages/Dashboard"
import AppTrackerPage from "./pages/AppTracker";
import BookLogPage from "./pages/BookLog";
import GroceryPage from "./pages/Groceries";
import WishlistPage from "./pages/Wishlist";
import ToBePage from "./pages/ToBe";
//components
import Nav from "./components/NavBar";
import Todos from "./components/ToDo/Todos";
import Todo from "./components/ToDo/Todo";
import { EditTodo } from "./components/ToDo/EditTodo";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/todos" element={<Todos/>}/>
        <Route path="/this-todo/:id" element={<Todo/>}/>
        <Route path ="/edit-this-todo/:id/edit" element={<EditTodo/>}/>
        <Route path="/apptracker" element={<AppTrackerPage />} />
        <Route path="/booklog" element={<BookLogPage />} />
        <Route path="/grocerylist" element={<GroceryPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/tbr-w" element={<ToBePage />} />
      </Routes>
    </div>
  );
}

export default App;
