import React, { Component } from "react";
import axios from "axios";

export class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      favoriteMovies: [],
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

  sendCreateUserClick = async () => {
    const { name, age, favoriteMovies } = this.state;
    axios
      .post("/users/Create-User", {
        name: name,
        age: age,
        favoriteMovies: favoriteMovies,
      })
      .then((response) => {
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
        <h2>Create New User</h2>
        <div className="InputTemplate">
          <div className="UserInfo">
            <div className="UserInfoResponse" name="userCreated">
              {this.state.userCreated ? "User Successfully Created!" : ""}
            </div>
            <br />
            <div name="userName">Name: {this.state.userName}</div>
            <div name="userAge">Age: {this.state.userAge}</div>
            <div name="userFavoriteMovies">
              Favorit Movies: {this.state.userFavoriteMovies}
            </div>
          </div>
          <div className="InputBoxes">
            <input
              name="name"
              placeholder="Name"
              onChange={this.handleInputChange}
            />

            <input
              name="age"
              placeholder="Age"
              onChange={this.handleInputChange}
            />

            <input
              name="favoriteMovies"
              placeholder="Favorite Movies"
              onChange={this.handleInputChange}
            />

            <button onClick={this.sendCreateUserClick}>Create User</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;
