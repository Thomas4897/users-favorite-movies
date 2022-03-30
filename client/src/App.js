import React, { Component } from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";
import GetUser from "./components/GetUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import GetAllUsers from "./components/GetAllUsers";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Columns">
            <div className="AllUsers">
              <GetAllUsers />
            </div>
            <div className="InputComponents">
              <CreateUser />
              <GetUser />
              <UpdateUser />
              <DeleteUser />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
