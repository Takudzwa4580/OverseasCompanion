const { Router } = require("express");
const router = Router();
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt =require("jsonwebtoken")

// Signup user
router.post("/signup", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: password,
  });
  res.json({
    msg: "User created successfully",
  });
});

// login user
router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "incorrect email and password",
    });
  }
});

module.exports = router;
