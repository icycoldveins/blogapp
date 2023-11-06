const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Define routes for User model
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Add more routes...

module.exports = router;
