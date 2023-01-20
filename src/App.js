import { Route, Routes } from "react-router-dom";
//css
// import './default.css'
import './style.css'
//pages
import Dashboard from "./components/Dashboard"
import AppTrackerPage from "./pages/AppTracker";
import BookLogPage from "./pages/BookLog";
import WishlistPage from "./pages/Wishlist";
import ToBePage from "./pages/ToBe";
//components
import Nav from "./components/NavBar";
import Todos from "./components/ToDo/Todos";
import Todo from "./components/ToDo/Todo";
import { EditTodo } from "./components/ToDo/EditTodo";
import Grocery from "./components/Groceries/Grocery";
import Groceries from "./components/Groceries/Groceries";
import EditGrocery from "./components/Groceries/EditGrocery";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/todos" element={<Todos/>}/>
        <Route path="/this-todo/:id" element={<Todo/>}/>
        <Route path ="/edit-this-todo/:id/edit" element={<EditTodo/>}/>
        <Route path="/grocerylist" element={<Groceries/>}/>
        <Route path="/this-grocery/:id" element={<Grocery/>}/>
        <Route path ="/edit-this-grocery/:id/edit" element={<EditGrocery/>}/>
    
        <Route path="/apptracker" element={<AppTrackerPage />} />
        <Route path="/booklog" element={<BookLogPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/tbr-w" element={<ToBePage />} />
      </Routes>
    </div>
  );
}

export default App;
