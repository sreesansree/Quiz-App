const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ResponseSchema = new mongoose.Schema({
  responseId: {
    type: String,
    default: uuidv4,
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  answers: [
    {
      type: String,
      required: true,
    },
  ],
  score: {
    type: Number,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Response", ResponseSchema);
