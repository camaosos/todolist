import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./ToDo";
import { Link } from "react-router-dom";

class CredentialsRevealed extends React.Component {
  render() {
    return (
      <div id="mountable">
        <h2> email: bootcamp@globant.com </h2>
        <h2> password: bootcamp123 </h2>
      </div>
    );
  }
  componentDidMount() {
    //console.log("mounted");
  }

  componentWillUnmount() {
    //console.log("unmount");
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isRevealed: false,
      isLogged: false
    };
  }

  handleSubmit = event => {
    let { email, password } = this.state;
    email === "bootcamp@globant.com" && password === "bootcamp123"
      ? this.handleLogin()
      : alert("Wrong email or password!");
    event.preventDefault();
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleToggle = event => {
    // be careful: synchronous activities
    this.setState({ isRevealed: !this.state.isRevealed }, () =>
      this.state.isRevealed ? this.mountReveal() : this.unmountReveal()
    );
  };

  mountReveal() {
    ReactDOM.render(
      <CredentialsRevealed />,
      document.getElementById("renderHere")
    );
  }
  unmountReveal() {
    ReactDOM.unmountComponentAtNode(document.getElementById("renderHere"));
  }

  handleLogin = event => {
    alert("Logged In");
    this.setState({ isLogged: true });
    ReactDOM.render(<ToDoList />, document.getElementById("toDoHere"));
    //sometimes this submit refreshes...
  };

  handleLogout = event => {
    alert("Logged Out");
    this.setState({ isLogged: false });
    ReactDOM.unmountComponentAtNode(document.getElementById("toDoHere"));
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.state.isLogged ? this.handleLogout : this.handleSubmit}
        >
          <input
            id="email"
            type="email"
            placeholder="email"
            autoComplete="username"
            onChange={this.handleChange}
          />
          <input
            id="password"
            type="password"
            placeholder="password"
            autoComplete="current-password"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value={this.state.isLogged ? "Log Out" : "Log In"}
            disabled={!this.validateForm()}
          />
          <div>
            {" "}
            <Link id="linkHere" onClick={this.handleToggle} to="/">
              {this.state.isRevealed
                ? "Hide Credentials"
                : "Reveal Credentials"}
            </Link>
          </div>
          <div id="renderHere" />
        </form>
        <div id="toDoHere" />
      </div>
    );
  }
}

export default Login;
