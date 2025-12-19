const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require("./routes/auth");
const feedRoutes = require("./routes/feed");
const profileRoutes = require("./routes/profile");

app.use("/auth", authRoutes);
app.use("/feed", feedRoutes);
app.use("/profile", profileRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`AtomFeed backend running on http://localhost:${PORT}`);
});
