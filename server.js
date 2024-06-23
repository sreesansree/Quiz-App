const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));


// test route
app.get("/test", (req, res) => {
  try {
    res.json("Sucess test");
  } catch (error) {
    console.log(error);
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server connected to http://localhost:${PORT}`)
);
