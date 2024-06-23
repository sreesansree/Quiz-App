const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const QuestionSchema = new mongoose.Schema({
  questionId: {
    type: String,
    default: uuidv4,
  },
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  correctAnswer: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const QuizSchema = new mongoose.Schema({
  quizId: {
    type: String,
    default: uuidv4,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  questions: [QuestionSchema],
  totalMarks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Quiz", QuizSchema);
