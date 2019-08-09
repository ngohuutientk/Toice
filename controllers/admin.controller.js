let testModel = require('../models/test.model');
let questionModel = require('../models/question.model');

// Giao diện quản lý test
module.exports.adminTest = async (req, res) => {

    try {
        let tests = await testModel.find();
        res.render('tests/admin_index', {
            tests: tests
        });
    } catch (error) {
        res.send('loi');
    }
}

// Xóa test
module.exports.deleteTest = async (req, res) => {

    let testID = req.params.testID;
    console.log(testID);
    try {
        let test = await testModel.findByIdAndDelete(testID);
        res.redirect('/admin/tests');
    } catch (error) {
        res.send('Khong tim thay trang!');
    }
}

// Thêm hoặc sửa test
module.exports.updateOrCreateTest = async (req, res) => {

    let newTest = req.body;
    let date = new Date();
    newTest.date = date;
    console.log(newTest.id);
    console.log(newTest.testName);

    if (!newTest.id) {
        try {
            let test = await testModel.create(newTest);
            res.redirect('/admin/tests');
        } catch (error) {
            res.send('Fail' + error);
        }
    }

    else {
        try {
            let test = await testModel.findByIdAndUpdate(newTest.id, {
                testName: newTest.testName,
                imageURL: newTest.imageURL,
                description: newTest.description,
                date: date
            });
            console.log(test);

            res.redirect('/admin/tests/');
        } catch (error) {
            res.send('Khong tim thay trang!');
        }
    }
}


// load giao diện question của 1 test
module.exports.adminQuestion = async (req, res) => {

    let id = req.params.testID;
    try {
        let questions = await questionModel.find({
            test: id
        });
         let newQuestions = questions.map(function (question) {
         if (question.paragraph !== undefined)
                 question.paragraph = question.paragraph.replace(/(\r\n|\n|\r)/gm, '\\n');
             return question;
         });

        console.log(newQuestions);

        res.render('questions/admin_index', {
            questions: newQuestions,
            testID: id
        });
    } catch (error) {
        res.send('loi' + error);
    }
}

module.exports.updateOrCreateQuestion = async (req, res) => {

    let newQuestion = req.body;
    let testID = req.params.testID;
    console.log(newQuestion);
    if (!newQuestion.id) {
        newQuestion.test = testID;
        try {
            let question = await questionModel.create(newQuestion);
            res.redirect('/admin/tests/' + testID);
        } catch (error) {
            res.send('Fail');
        }
    }

    else {
        try {
            let question = await questionModel.findByIdAndUpdate(newQuestion.id, {
                test: testID,
                part: newQuestion.part,
                number: newQuestion.number,
                paragraph: newQuestion.paragraph,
                question: newQuestion.question,
                A: newQuestion.A,
                B: newQuestion.B,
                C: newQuestion.C,
                D: newQuestion.D,
                key: newQuestion.key,
                explain: newQuestion.explain,
                audioURL: newQuestion.audioURL,
                imageURL: newQuestion.imageURL
            });
            console.log(question);
            res.redirect('/admin/tests/' + testID);
        } catch (error) {
            res.send('Loi ' + error);
        }

    }
}

// Xóa question
module.exports.deleteQuestion = async (req, res) => {

    let questionID = req.params.questionID;
    let testID = req.params.testID;

    try {
        let test = await questionModel.findByIdAndDelete(questionID);
        res.redirect('/admin/tests/' + testID);
    } catch (error) {
        res.send('Khong tim thay trang!');
    }
}
