import React, { Component } from "react";
import axios from "axios";

export class UpdateUser extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      userCreated: false,
      name: "",
      age: "",
      favoriteMovies: [],
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

  sendUpdateUserClick = async () => {
    const { id, name, age, favoriteMovies } = this.state;
    axios
      .get(`/users/Get-User/${this.state.id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          name: response.data.payload.name,
          age: response.data.payload.age,
          favoriteMovies: response.data.payload.favoriteMovies.join(", "),
        });
      })
      .then(() => {
        axios
          .put(`/users/Update-User/${id}`, {
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
              userFavoriteMovies: response.data.payload.favoriteMovies,
            });
          });
      });
  };

  render() {
    return (
      <div>
        <h2>Update User By ID</h2>
        <div className="InputTemplate">
          <div>
            <div className="UserInfo">
              <div className="UserInfoResponse" name="userCreated">
                {this.state.userCreated ? "Old User Info!" : ""}
              </div>
              <br />
              <div name="userName">Name: {this.state.name}</div>
              <div name="userAge">Age: {this.state.age}</div>
              <div name="userFavoriteMovies">
                Favorit Movies: {this.state.favoriteMovies}
              </div>
            </div>{" "}
            <div className="UserInfo">
              <div className="UserInfoResponse" name="userCreated">
                {this.state.userCreated
                  ? "User Info Successfully Updated!"
                  : ""}
              </div>
              <br />
              <div name="userName">Name: {this.state.userName}</div>
              <div name="userAge">Age: {this.state.userAge}</div>
              <div name="userFavoriteMovies">
                Favorit Movies: {this.state.userFavoriteMovies}
              </div>
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
            <div>
              <input
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <input
                name="age"
                placeholder="Age"
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <input
                name="favoriteMovies"
                placeholder="Favorite Movies"
                onChange={this.handleInputChange}
              />
            </div>

            <button onClick={this.sendUpdateUserClick}>Update User</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateUser;
