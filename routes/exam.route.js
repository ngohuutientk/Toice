let express = require('express');
let router = express.Router();
let examcontroller = require('../controllers/exam.controller');

router.get('/',examcontroller.exam);
router.post('')

module.exports = router;