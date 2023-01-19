import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

//Wrap the App Component with the Router component to enable the router features
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  //comes from public/index.html, this is the only html page for the whole react application
  document.getElementById("root")
);