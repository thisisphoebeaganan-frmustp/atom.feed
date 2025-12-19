const express = require("express");
const router = express.Router();

// Fake profile
router.get("/:username", (req, res) => {
  const { username } = req.params;
  res.json({
    username,
    bio: "Surviving the atomizer one post at a time.",
    avatar: "/assets/img/avatar.png"
  });
});

module.exports = router;
