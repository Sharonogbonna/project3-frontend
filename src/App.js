import { Route, Routes } from "react-router-dom";
//css
import './default.css'
import './style.css'

//#region //components
import Dashboard from "./components/Dashboard"
import Nav from "./components/NavBar";
import Todos from "./components/ToDo/Todos";
import Todo from "./components/ToDo/Todo";
import { EditTodo } from "./components/ToDo/EditTodo";
import Grocery from "./components/Groceries/Grocery";
import Groceries from "./components/Groceries/Groceries";
import EditGrocery from "./components/Groceries/EditGrocery";
import Applications from "./components/Applications/Applications";
import AppDisplay from "./components/Applications/AppDisplay";
import EditApp from "./components/Applications/EditApp";
import Log from "./components/BookLog/Log";
import Logs from "./components/BookLog/Logs";
import EditLog from "./components/BookLog/EditLog";
import Wishes from "./components/Wishlist/Wishes";
import Wish from "./components/Wishlist/Wish";
import EditWish from "./components/Wishlist/EditWish";
import ToBes from "./components/ToBe/ToBes";
import ToBe from "./components/ToBe/ToBe";
import EditToBe from "./components/ToBe/EditToBe";
//#endregion


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>

        {/* TODOS */}
        <Route path="/todos" element={<Todos/>}/>
        <Route path="/this-todo/:id" element={<Todo/>}/>
        <Route path ="/edit-this-todo/:id/edit" element={<EditTodo/>}/>

        {/* GROCERIES */}
        <Route path="/grocerylist" element={<Groceries/>}/>
        <Route path="/this-grocery/:id" element={<Grocery/>}/>
        <Route path ="/edit-this-grocery/:id/edit" element={<EditGrocery/>}/>

        {/* APPLICATION TRACKER */}
        <Route path="/apptracker" element={<Applications />} />
        <Route path="/this-app/:id" element={<AppDisplay/>}/>
        <Route path ="/edit-this-app/:id/edit" element={<EditApp/>}/>

        {/* BOOK LOG */}
        <Route path="/booklog" element={<Logs />} />
        <Route path="/this-book/:id" element={<Log/>}/>
        <Route path ="/edit-this-book/:id/edit" element={<EditLog/>}/
        >
        {/* WISHLIST */}
        <Route path="/wishlist" element={<Wishes />} />
        <Route path="/this-wish/:id" element={<Wish/>}/>
        <Route path ="/edit-this-wish/:id/edit" element={<EditWish/>}/>

        {/* TBR TBW */}
        <Route path="/tbr-w" element={<ToBes/>} />
        <Route path="/this-tbr/:id" element={<ToBe/>}/>
        <Route path ="/edit-this-tbr/:id/edit" element={<EditToBe/>}/>
      </Routes>
    </div>
  );
}

export default App;
