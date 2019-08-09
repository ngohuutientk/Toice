let mongoose = require('mongoose');

let questionSchema = new mongoose.Schema({
    test: {
        type: mongoose.Schema.Types.ObjectId
    },
    part: Number,
    number: Number,
    paragraph: String,
    question: String,
    A: String,
    B: String,
    C: String,
    D: String,
    key: String,
    explain: String,
    audioURL: String,
    imageURL: String,
    
});

let Question = mongoose.model('questions', questionSchema);

module.exports = Question;