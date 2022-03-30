const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../../../utils/index");

const createUserDB = async (req, res) => {
  try {
    const { name, age, favoriteMovies } = req.body;

    // Creating a New User Object;
    let newUser = new User({
      name: name,
      age: age,
      favoriteMovies: favoriteMovies.split(","),
    });

    // Use .save() to save new user object to DB
    let savedUser = await newUser.save();

    res.status(200).json({
      message: "New user has been created",
      payload: savedUser,
    });
    // res.redirect("/login-form");
  } catch (error) {
    res.status(500).json({
      message: "Create User Error",
      error: "error.message",
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

const getAllUsersDB = async (req, res) => {
  try {
    let allUsers = await User.find();

    res.status(200).send({ payload: allUsers });
  } catch (error) {
    console.log(allUsers);
    res.status(500).json({ message: "Error", error: error.message });
  }
};

const updateUserDB = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, favoriteMovies } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name: name,
        age: age,
        favoriteMovies: favoriteMovies.split(","),
      },
      {
        new: true,
      }
    );

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
  getAllUsersDB,
  updateUserDB,
  deleteUserDB,
};
