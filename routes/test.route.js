let express = require('express');
let router = express.Router();
let testController = require('../controllers/test.controller');


router.get('/', testController.index);
router.post('/create', testController.postCreate);
router.get('/:testID', testController.get);


module.exports = router;