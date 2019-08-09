let testModel = require('../models/test.model');
let questionModel = require('../models/question.model');

module.exports.index = async (req, res) => {

    let testID = req.params.testID;

    try {
        let test = await testModel.findById(testID);
    } catch (error) {
        console.log(error);
        res.send('Khong tim thay trang!');
    }

    let questions = await questionModel.find({test: testID});
    res.render('questions/index', { questions });
}


module.exports.create = (req, res) => {
    let testID = req.params.testID;
    console.log(testID);
    res.render('questions/create', {
        testID: testID
    });
}

module.exports.postCreate = async (req, res) => {

    let testID = req.params.testID;
    let question = req.body;
    question.test = testID;
    var x = await questionModel.create(question);
    console.log(x);
    res.send('success!');
};

