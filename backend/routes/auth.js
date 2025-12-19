const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const usersFile = path.join(__dirname, "../data/users.json");

// Helper: read users
function getUsers() {
  const data = fs.readFileSync(usersFile);
  return JSON.parse(data);
}

// Helper: save users
function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, message: "Login successful!", user });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

// Signup
router.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  const users = getUsers();

  if (users.find(u => u.username === username)) {
    return res.json({ success: false, message: "Username already exists" });
  }

  const newUser = {
    id: users.length + 1,
    username,
    email,
    password,
    bio: "New AtomFeed user",
    avatar: "/assets/img/default.png"
  };

  users.push(newUser);
  saveUsers(users);

  res.json({ success: true, message: "Signup successful!", user: newUser });
});

module.exports = router;
