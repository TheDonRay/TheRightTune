const express = require("express");
const app = express();
const cors = require("cors");

// import route
const aiRoute = require("./routes/openAI.route.js");

app.use(express.json());
app.use(cors());

app.use("/api/v1/", aiRoute);

app.get("/", (req, res) => {
  res.json({
    ServerRunning: true,
  });
});

module.exports = app;
