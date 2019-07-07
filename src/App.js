import React from "react";
import "./App.css";
import Login from "./Form";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  //this.toDoListElement = React.createRef();
  return (
    <div className="App">
      <h1>Welcome to the To-do list</h1>
      <h2>Please enter your credentials</h2>
      <Router>
        <Login />
      </Router>
    </div>
  );
}

export default App;
