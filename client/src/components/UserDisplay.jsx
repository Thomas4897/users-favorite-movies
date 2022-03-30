export function UserDisplay(props) {
  return (
    <div className="GetAllUserInfo">
      <div name="idProp">User ID: {props.idProp}</div>
      <br />
      <div name="nameProp">Name: {props.nameProp}</div>
      <div name="ageProp">Age: {props.ageProp}</div>
      <div name="favoriteMoviesProp">
        Favorite Movies: {props.favoriteMoviesProp}
      </div>
    </div>
  );
}
