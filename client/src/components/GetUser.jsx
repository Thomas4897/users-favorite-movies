import React, { Component } from "react";
import axios from "axios";
import "../App.css";

export class GetUser extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      userCreated: false,
      userName: "",
      userAge: "",
      userFavoriteMovies: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  sendGetUserClick = async () => {
    axios.get(`/users/Get-User/${this.state.id}`).then((response) => {
      console.log(response.data);
      this.setState({
        userCreated: true,
        userName: response.data.payload.name,
        userAge: response.data.payload.age,
        userFavoriteMovies: response.data.payload.favoriteMovies.join(", "),
      });
    });
  };

  render() {
    return (
      <div>
        <h2>Get User By ID</h2>
        <div className="InputTemplate">
          <div className="UserInfo">
            <div className="UserInfoResponse" name="userCreated">
              {this.state.userCreated ? "User Successfully Retrieved!" : ""}
            </div>
            <br />
            <div name="userName">Name: {this.state.userName}</div>
            <div name="userAge">Age: {this.state.userAge}</div>
            <div name="userFavoriteMovies">
              Favorit Movies: {this.state.userFavoriteMovies}
            </div>
          </div>
          <div className="InputBoxes">
            <div>
              <input
                name="id"
                placeholder="User ID"
                onChange={this.handleInputChange}
              />
            </div>
            <button onClick={this.sendGetUserClick}>Get User</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GetUser;
