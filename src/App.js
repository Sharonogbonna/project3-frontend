import { Route, Routes } from "react-router-dom";

//pages
import TodoPage from "./pages/Todo";
import Dashboard from "./pages/Dashboard"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/todos" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
