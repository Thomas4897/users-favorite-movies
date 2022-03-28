const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../../../utils/index");

const createUserDB = async (req, res) => {
  try {
    const { name, age, favoriteMovies } = req.body;

    // const removeSpaces = favoriteMovies.replace(/\s/g, "");
    const favoriteMoviesArray = favoriteMovies.split(", ");
    // Creating a New User Object;
    let newUser = new User({
      name: name,
      age: age,
    });

    newUser.favoriteMovies = favoriteMoviesArray;

    // Use .save() to save new user object to DB
    let savedUser = await newUser.save();

    res.status(200).json({
      message: "New user has been created",
      payload: savedUser,
    });
    // res.redirect("/login-form");
  } catch (error) {
    // res.status(500).json({
    //   error: errorHandler(error),
    // });
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
};

const getUserDB = async (req, res) => {
  try {
    const { id } = req.params;

    let getUserById = await User.findById(id);

    if (getUserById === null) {
      throw { message: "No user of id is found, can't get user" };
    }

    res.status(200).send({ payload: getUserById });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
};

const updateUserDB = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findOneAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ message: "Updated User", payload: updatedUser });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
};

const deleteUserDB = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted User", payload: deletedUser });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
};

module.exports = {
  createUserDB,
  getUserDB,
  updateUserDB,
  deleteUserDB,
};
