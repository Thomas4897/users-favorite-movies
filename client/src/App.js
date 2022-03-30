import React, { Component } from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";
import GetUser from "./components/GetUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CreateUser />
          <GetUser />
          <UpdateUser />
          <DeleteUser />
        </header>
      </div>
    );
  }
}

export default App;
