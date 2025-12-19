const express = require("express");
const router = express.Router();

// Fake feed
router.get("/", (req, res) => {
  const posts = [
    { user: "phoebe", content: "Safe post!" },
    { user: "random", content: "OMG slayyy 💅", brainrot: true }
  ];
  res.json(posts);
});

module.exports = router;
