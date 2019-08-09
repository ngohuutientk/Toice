let mongoose = require('mongoose');

let examSchema = new mongoose.Schema({
    part:String,
    exam:String,
    exam_A:String,
    exam_B:String,
    exam_C:String,
    exam_D:String,
    exam_da:String
});

let Exam = mongoose.model('exam',examSchema);

module.exports = Exam;

