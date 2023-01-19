import { Route, Routes } from "react-router-dom";

//pages
import TodoPage from "./pages/Todo";
import Dashboard from "./pages/Dashboard"
import AppTrackerPage from "./pages/AppTracker";
import BookLogPage from "./pages/BookLog";
import GroceryPage from "./pages/Groceries";
import WishlistPage from "./pages/Wishlist";
import ToBePage from "./pages/ToBe";
import Nav from "./components/NavBar";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/todos" element={<TodoPage />} />
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
