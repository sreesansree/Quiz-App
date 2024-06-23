const express = require("express");
const router = express.Router();
const {
  createQuiz,
  getQuizzes,
  getQuiz,
  submitQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quizController");

const auth = require("../middlewares/authMiddleware");

// @route   POST api/quizzes
// @desc    Create a quiz
// @access  Private

router.post("/", auth, createQuiz);

// @route   GET api/quizzes
// @desc    Get all quizzes
// @access  Private

router.get("/", auth, getQuizzes);

// @route   GET api/quizzes/:id
// @desc    Get a single quiz by ID
// @access  Private

router.get("/:id", auth, getQuiz);

// @route   POST api/quizzes/:id/submit
// @desc    Submit quiz answers
// @access  Private

router.post("/:id/submit", auth, submitQuiz);

// @route   PUT api/quizzes/:id
// @desc    Update a quiz by ID
// @access  Private

router.put("/:id", auth, updateQuiz);

// @route   DELETE api/quizzes/:id
// @desc    Delete a quiz by ID
// @access  Private

router.delete("/:id", auth, deleteQuiz);

module.exports = router;
