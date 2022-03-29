import React, { Component } from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CreateUser />
        </header>
      </div>
    );
  }
}

export default App;
