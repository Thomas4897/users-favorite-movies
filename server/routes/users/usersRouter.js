var express = require("express");
var router = express.Router();
const {
  createUserDB,
  getUserDB,
  getAllUsersDB,
  updateUserDB,
  deleteUserDB,
} = require("./controller/usersController");
const { checkIsEmpty } = require("../../utils/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Hello from the users router");
});

router.post("/Create-User", checkIsEmpty, createUserDB);
router.get("/Get-User/:id", getUserDB);
router.get("/Get-All-Users", getAllUsersDB);
router.put("/Update-User/:id", checkIsEmpty, updateUserDB);
router.delete("/Delete-User/:id", checkIsEmpty, deleteUserDB);

module.exports = router;
