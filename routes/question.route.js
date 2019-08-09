let express = require('express');
let router = express.Router();
var questionController = require('../controllers/question.controller');

router.get('/:testID/questions', questionController.index);
router.get('/:testID/questions/create', questionController.create);
router.post('/:testID/questions/create', questionController.postCreate);

module.exports = router;