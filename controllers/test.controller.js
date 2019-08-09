let testModel = require('../models/test.model');
let questionModel = require('../models/question.model');

module.exports.index = async (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage = 12;
    var start = (page - 1) * perPage;
    var end = page * perPage;

    try {
        let tests = await testModel.find();
        tests = tests.slice(start, end);
        if (page === 1)
            page = 2;
        res.render('tests/index', {
            tests: tests,
            page: page
        });
    } catch (error) {
        res.send('loi');
    }
}

module.exports.postCreate = async (req, res) => {
    let infoTest = req.body;
    console.log(infoTest);
    try {
        let test = await testModel.create(infoTest);
        res.redirect('/tests');
    } catch (error) {
        res.send('Fail');
    }
}

module.exports.get = async (req, res) => {

    let testID = req.params.testID;
    let part1 = new Array();
    let part2 = new Array();
    let part3 = new Array();
    let part4 = new Array();
    let part5 = new Array();
    let part6 = new Array();
    let part7 = new Array();

    try {
        let questions = await questionModel.find({
            test: testID
        }).sort('number');

        for (let i = 0; i < questions.length; i++) {

            if (questions[i].part === 1)
               part1.push(questions[i]);
            else if (questions[i].part === 2)
                part2.push(questions[i]);
            else if (questions[i].part === 3)
                part3.push(questions[i]);
            else if (questions[i].part === 4)
                part4.push(questions[i]);
            else if (questions[i].part === 5)
                part5.push(questions[i]);
            else if (questions[i].part === 6)
                part6.push(questions[i]);
            else if (questions[i].part === 7)
                part7.push(questions[i]);
        }

       
        let test = await testModel.findById(testID);
        res.render('tests/test', {
            test: test,
            questions: questions,
            part1: part1,
            part2: part2,
            part3: part3,
            part4: part4,
            part5: part5,   
            part6: part6,
            part7: part7,
        });
    } catch (error) {
        res.send('Loi' + error);
    }
}