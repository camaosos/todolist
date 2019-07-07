import React from "react";
import "./App.css";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {
        Exist: false,
        "Get a life": false,
        "Realize existence is futile": true
      }
    };
  }

  handleTaskToggle = event => {
    let task = event.target.innerText; //quick n dirty trick
    this.setState(prevState => ({
      tasks: {
        // object that we want to update
        ...prevState.tasks, // keep all other key-value pairs
        [task]: !this.state.tasks[task] // update the value of specific key
      }
    }));
  };

  handleAdd = event => {
    let task = document.getElementById("inputTask").value;
    document.getElementById("inputTask").value = "";
    //TODO: show a message when task already exists
    this.setState(prevState => ({
      tasks: {
        ...prevState.tasks, // keep all other key-value pairs
        [task]: false // add the value of specific key
      }
    }));
  };

  handleRemove = event => {
    let { tasks } = this.state;
    delete tasks[event.target.id];
    this.setState({
      tasks: tasks
    });
  };

  render() {
    return (
      <div className="tasks">
        <h2>To-do list</h2>
        {Object.keys(this.state.tasks).length === 0 ? (
          <p>No items in list</p>
        ) : (
          <ul>
            {Object.keys(this.state.tasks)
              .map(task => {
                return (
                  <li
                    className={this.state.tasks[task] ? "done" : "toDo"}
                    key={`task_${task}`}
                  >
                    <p onClick={this.handleTaskToggle}>{task}</p>

                    <button
                      id={`${task}`}
                      key={`${task}`}
                      onClick={this.handleRemove}
                    >
                      &#x274C;
                    </button>
                  </li>
                );
              })
              .reduce((prev, curr) => [prev, curr])}
          </ul>
        )}
        <div>
          <input id="inputTask" />{" "}
          <button onClick={this.handleAdd} key="addButton">
            Add
          </button>
        </div>
      </div>
    );
  }
}

//class Task extends React.Component

export default ToDoList;
