import React, { Component } from "react";
import axios from "axios";

export class DeleteUser extends Component {
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

  sendDeleteUserClick = async () => {
    axios.delete(`/users/Delete-User/${this.state.id}`).then((response) => {
      console.log(response.data);
      this.setState({
        userCreated: true,
        userName: response.data.payload.name,
        userAge: response.data.payload.age,
        userFavoriteMovies: response.data.payload.favoriteMovies.join(","),
      });
    });
  };
  render() {
    return (
      <div>
        <h2>Delete User By ID</h2>
        <div className="InputTemplate">
          <div className="UserInfo">
            <div className="UserInfoResponse" name="userCreated">
              {this.state.userCreated ? "User Successfully Deleted!" : ""}
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

            <button onClick={this.sendDeleteUserClick}>Delete User</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteUser;
