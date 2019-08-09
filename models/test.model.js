let mongoose = require('mongoose');

let testSchema = new mongoose.Schema({
    testName: String,
    imageURL: String,
    description: String,
    date: Date
});

let Test = mongoose.model('tests', testSchema);

module.exports = Test;