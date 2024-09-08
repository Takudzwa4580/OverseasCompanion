const { Router } = require("express");
const router = Router();
const { User } = require("../db");

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
    const { username, password } = req.body;

    try {
        // Find the user with the matching username
        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(400).json({ error: "User not found. Please sign up." });
        }

        if (user.password !== password) {
            return res.status(400).json({ error: "Invalid password." });
        }

        res.json({ msg: "Sign-in successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred during sign-in" });
    }
});

module.exports = router;
