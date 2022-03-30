import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import { UserDisplay } from "./UserDisplay";

export class GetAllUsers extends Component {
  constructor() {
    super();
    this.state = {
      allUsers: [],
    };
  }

  sendGetAllUsersClick = async () => {
    axios.get(`/users/Get-All-Users`).then((response) => {
      console.log(response.data.payload);
      this.setState({
        allUsers: response.data.payload,
      });
    });
  };

  render() {
    return (
      <div>
        <h2>Get User By ID</h2>
        <button onClick={this.sendGetAllUsersClick}>Get User</button>
        {this.state.allUsers.map(({ _id, name, age, favoriteMovies }, idx) => {
          return (
            <UserDisplay
              key={`User-${idx}`}
              idProp={_id}
              nameProp={name}
              ageProp={age}
              favoriteMoviesProp={favoriteMovies}
              // handlePromptInputChange={this.handlePromptInputChange}
              // handleIsLieChecked={this.handleIsLieChecked}
            />
          );
        })}
      </div>
    );
  }
}

export default GetAllUsers;
