const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  try {
    const existingUser = await Admin.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newAdmin = await Admin.create({
      firstName,
      lastName,
      username,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: newAdmin._id, username: newAdmin.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      msg: "Admin created and signed in successfully",
      token,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({
      msg: "An error occurred during signup",
      error: error.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  //implement admin signin logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({
    username,
    password,
  });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Incorrect password" });
  }
  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
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

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const name = req.body.name;
  const imageLink = req.body.imageLink;
  const duration = req.body.duration;

  await Course.create({
    title,
    name,
    imageLink,
    duration,
  });
  res.json({
    message: "Course created successfully",
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
