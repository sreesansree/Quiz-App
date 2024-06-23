const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const ResponseSchema = new mongoose.Schema({
    responseId: { 
        type: String, 
        default: uuidv4 
    },
    quizId: {
         type: String,
          required: true 
        },
    userId: { 
        type: String,
         required: true 
        },
    answers: [{ 
        type: String,
         required: true 
        }],
    score: { 
        type: Number,
         required: true
         },
    totalMarks: { 
        type: Number,
         required: true 
        },
});

module.exports = mongoose.model('Response', ResponseSchema);
