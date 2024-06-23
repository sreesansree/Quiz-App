const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
// Load environment variables
dotenv.config();

// Connect to database
// connectDB();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDb is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Middleware
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// test route
app.get("/test", (req, res) => {
  try {
    res.json("Sucess test");
  } catch (error) {
    console.log(error);
  }
});
// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/quizzes", require("./routes/quizRoutes"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server connected to http://localhost:${PORT}`)
);
